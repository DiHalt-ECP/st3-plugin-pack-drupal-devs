# This Python file uses the following encoding: utf-8
#-----------------------------------------------------------------------------------
# HEX Colors Auto-Complete in HTML/CSS
# Version 1.2
#-----------------------------------------------------------------------------------
#
# This plugin replaces the autocompletion of the HEX colors
# in the html and css files.
#
# written by DiHalt
# dihalt@tut.by
#-----------------------------------------------------------------------------------

import sublime
import sublime_plugin

import re

# plugin settings
hcc_settings = None

# No USED.
def plugin_loaded():
    # global hcc_settings
    globals()['hcc_settings'] = sublime.load_settings('HexColorCompletions.sublime-settings')


class HexColorCompletions(sublime_plugin.EventListener):

    # Handler of autocompletion Event.
    def on_query_completions(self, view, prefix, locations):
        # Settings. WHAT USE??
        # complete_triggers = hcc_settings.get('auto_complete_triggers', '')

        # if complete_triggers:
        #     complete_triggers_st = view.settings().get("auto_complete_triggers")

        #     for trigger in complete_triggers:
        #         complete_triggers_st.append(trigger)

        #     view.settings().set("auto_complete_triggers", complete_triggers_st)

        # only complete single line/selection
        if len(locations) != 1:
            return None

        # Check Excludes Scope
        # if is_disabled_in(view.scope_name(locations[0])):
        #     return []

        # Position of Cursor
        loc = locations[0]

        # Document / Region / Block Selector
        # match inside a CSS document and
        # match inside the style attribute of HTML tags, incl.
        # just before the quote that closes the attribute value.
        css_selector_scope = "source.css - meta.selector.css"
        scss_selector_scope = "source.scss - meta.selector.css, source.sass - meta.selector.css, source.scss - meta.selector.scss"
        html_style_attr_selector_scope = "text.html meta.attribute-with-value.style.html " + \
                                    "string.quoted - punctuation.definition.string.begin.html"
        selector_scope = css_selector_scope + ', ' + scss_selector_scope + ', ' + html_style_attr_selector_scope

        if not view.match_selector(loc, selector_scope):
            # if the text immediately after the caret is a HTML style tag beginning, and the character before the
            # caret matches the CSS scope, then probably the user is typing here (where | represents the caret):
            # <style type="text/css">.test { f|</style>
            # i.e. after a "style" HTML open tag and immediately before the closing tag.
            # so we want to offer CSS completions here.
            if view.match_selector(loc, 'text.html meta.tag.style.end punctuation.definition.tag.begin.html') and \
               view.match_selector(loc - 1, selector_scope):
                pass
            else:
                return None

        prop_value_scope = "meta.property-value.css, meta.property-value.scss, punctuation.terminator.rule.css"

        # We need change only value of properties
        if (view.match_selector(loc, prop_value_scope) or
            # This will catch scenarios like:
            # - .foo {font-style: |}
            # - <style type="text/css">.foo { font-weight: b|</style>
            view.match_selector(loc - 1, prop_value_scope)):

            # Check preset prepend hash # and valid prefix??.
            if not ((len(prefix) == 0 and view.substr(sublime.Region(loc-1, loc) == '#')) or
                ( len(prefix) < 8 and view.substr(sublime.Region(loc - len(prefix) - 1, loc))[0] == '#' )):
                return None

            l = []
            popup_info = ''

            # Get color of bg from theme
            style = view.style()
            bg_col = style.get('background')

            # Get All text without prefix - current position
            # (0, view.size())
            text = view.substr(sublime.Region(0, view.word(loc).begin()))
            text += view.substr(sublime.Region(view.word(loc).end(), view.size()))

            # Match all colors from Document
            matches = self.without_duplicates(re.findall(r'\#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})\b', text, re.I))
            match = []

            for col in matches:
                if  prefix in col:
                    match.append(col)

            if match or not prefix:
                add_semi_colon = view.substr(sublime.Region(loc, loc + 1)) != ';'

                index = 0
                body = ''
                for value in match:
                    index += 1

                    desc = value + "\t HEX Color "
                    snippet = value

                    if add_semi_colon:
                        snippet += ";"

                    l.append((desc, snippet))

                    popup_info += ' <span style="background-color: #' + value + ';color: ' + self.get_inv_col(bg_col, value) + ';">'
                    popup_info += self.get_norm_col(value) + '</span> '
                    if (index % 5 == 0):
                        body += '<p>' + popup_info + '</p>'
                        popup_info = ''

                if popup_info:
                    body += '<p>' + popup_info + '</p>'
                html = '<html><body style="padding:5px 7px;">' + body + "</body></html>"

                view.show_popup(html, sublime.COOPERATE_WITH_AUTO_COMPLETE | sublime.HIDE_ON_MOUSE_MOVE_AWAY, -1, 400, 400)

                return (l, sublime.INHIBIT_WORD_COMPLETIONS | sublime.INHIBIT_EXPLICIT_COMPLETIONS)
            else:
                return None


        # view.show_popup(str(len(prefix)) + '  ' + view.substr(sublime.Region(loc, loc - 1)) + '#ff0 #00f', sublime.COOPERATE_WITH_AUTO_COMPLETE)


# Check Excludes Scope
# def is_disabled_in(scope):
#     excluded_scopes = settings.get("exclude_from_completion", [])
#     for excluded_scope in excluded_scopes:
#         if scope.find(excluded_scope) != -1:
#             return True
#     return False

# keeps first instance of every word and retains the original order
# (n^2 but should not be a problem as len(words) <= MAX_VIEWS*MAX_WORDS_PER_VIEW)
    def without_duplicates(self, match):
        result = []
        used_match = []
        for m in match:
            if m not in used_match:
                used_match.append(m)
                result.append(m)
        return result


    # normalise contrast of foreground colors
    def get_inv_col(self, bg_col, col):
        # normalise bg color
        if bg_col:
            bg_col = self.get_norm_col(bg_col)
        else:
            bg_col = '#333333FF'

        col = self.get_norm_col(col)
        if not col[7:9]:
            col += 'FF'

        br = int(bg_col[1:3], 16)
        bg = int(bg_col[3:5], 16)
        bb = int(bg_col[5:7], 16)

        r = int(col[1:3], 16)
        g = int(col[3:5], 16)
        b = int(col[5:7], 16)
        a = int(col[7:9], 16) / 255.0

        r = br * (1 - a) + r * a
        g = bg * (1 - a) + g * a
        b = bb * (1 - a) + b * a

        # L = (max(r, g, b) + min(r, g, b)) / 2
        # Y709 = 0.2126 * r + 0.7152 * g + 0.0722 * b
        Y601 = ((r * 299) + (g * 587) + (b * 114)) / 1000

        v = Y601

        if v >= 128:
            v -= 128
        else:
            v += 128

        # return foreground color
        return '#%s' % (('%02X' % v) * 3)

    # normalising color value
    def get_norm_col(self, col):
        # normalise fg color
        if col[0] != '#':
            col = '#' + col
        if len(col) == 4:
            col = '#' + col[1] * 2 + col[2] * 2 + col[3] * 2 + 'FF'
        elif len(col) == 5:
            col = '#' + col[1] * 2 + col[2] * 2 + col[3] * 2 + col[4] * 2
        elif len(col) == 7:
            col += 'FF'
        else:
            return col
        r = int(col[1:3], 16)
        g = int(col[3:5], 16)
        b = int(col[5:7], 16)
        a = int(col[7:9], 16) or 1  # alpha == 0 doesn't apply alpha in Sublime
        # return '#%02X%02X%02X%02X' % (r, g, b, a)
        return '#%02X%02X%02X' % (r, g, b)



