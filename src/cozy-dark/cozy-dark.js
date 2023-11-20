import { common, editor, syntax, terminal } from "./colors.js"

export const cozyDark = {
  $schema: "vscode://schemas/color-theme",
  type: "dark",
  colors: {
    "activityBar.background": common.gray[900],
    "activityBar.border": editor.limedSpruce,
    "activityBar.foreground": common.white,
    "activityBarBadge.background": common.primary.main,
    "activityBarBadge.foreground": `${common.white}99`,
    "badge.background": common.primary.main,
    "badge.foreground": common.white,
    "breadcrumb.activeSelectionForeground": editor.riverBed,
    "breadcrumb.focusForeground": common.gray[100],
    "breadcrumb.foreground": common.gray[300],
    "breadcrumbPicker.background": editor.outerSpace,
    "button.background": common.gray[900],
    "button.foreground": common.gray[100],
    "button.hoverBackground": common.primary.main,
    contrastBorder: `${common.white}00`,
    "debugExceptionWidget.background": common.gray[900],
    "debugExceptionWidget.border": common.gray[100],
    "debugIcon.stopForeground": common.danger,
    "debugToolBar.background": common.gray[900],
    descriptionForeground: common.gray[100],
    "diffEditor.insertedTextBackground": common.primary.light,
    "diffEditor.insertedTextBorder": editor.limedSpruce,
    "diffEditor.removedTextBackground": editor.donJuan,
    "diffEditor.removedTextBorder": editor.limedSpruce,
    "dropdown.background": editor.riverBed,
    "dropdown.border": editor.riverBed,
    "dropdown.foreground": common.white,
    "editor.background": common.gray[900],
    "editor.findMatchBackground": `${common.gray[100]}80`,
    "editor.findMatchHighlightBackground": `${common.gray[100]}30`,
    "editor.findRangeHighlightBackground": editor.blueDianne,
    "editor.foreground": common.gray[100],
    "editor.hoverHighlightBackground": editor.limedSpruce,
    "editor.inactiveSelectionBackground": common.gray[700],
    "editor.lineHighlightBackground": common.gray[600],
    "editor.lineHighlightBorder": common.gray[600],
    "editor.rangeHighlightBackground": common.gray[600],
    "editor.selectionBackground": editor.limedSpruce2,
    "editor.selectionHighlightBackground": common.gray[600],
    "editor.wordHighlightBackground": editor.mako,
    "editor.wordHighlightStrongBackground": editor.riverBed,
    "editorBracketMatch.background": editor.kashmirBlue,
    "editorBracketMatch.border": editor.astronaut,
    "editorBracketHighlight.foreground1": common.yellow,
    "editorBracketHighlight.foreground2": editor.tapestry,
    "editorBracketHighlight.foreground3": editor.dodgerBlue,
    "editorCodeLens.foreground": common.gray[100],
    "editorCursor.foreground": common.gray[100],
    "editorError.border": editor.limedSpruce,
    "editorError.foreground": common.danger,
    "editorGroup.border": common.gray[900],
    "editorGroup.dropBackground": editor.limedSpruce,
    "editorGroup.emptyBackground": common.gray[900],
    "editorGroupHeader.noTabsBackground": editor.limedSpruce,
    "editorGroupHeader.tabsBackground": editor.mirage,
    "editorGroupHeader.tabsBorder": editor.limedSpruce,
    "editorGutter.addedBackground": common.green,
    "editorGutter.background": common.gray[900],
    "editorGutter.deletedBackground": common.danger,
    "editorGutter.modifiedBackground": editor.astronaut,
    "editorHoverWidget.background": editor.mirage2,
    "editorHoverWidget.border": editor.limedSpruce,
    "editorIndentGuide.activeBackground": editor.doveGray,
    "editorIndentGuide.background": editor.outerSpace,
    "editorLineNumber.foreground": editor.riverBed,
    "editorLink.activeForeground": common.gray[100],
    "editorMarkerNavigation.background": common.gray[900],
    "editorMarkerNavigationError.background": editor.cabaret,
    "editorMarkerNavigationWarning.background": editor.rawSienna,
    "editorOverviewRuler.border": editor.limedSpruce,
    "editorOverviewRuler.commonContentForeground": `${common.yellow}55`,
    "editorOverviewRuler.currentContentForeground": `${editor.amaranth}55`,
    "editorOverviewRuler.incomingContentForeground": `${editor.harlequin}55`,
    "editorRuler.foreground": editor.cello,
    "editorSuggestWidget.background": editor.mirage2,
    "editorSuggestWidget.border": editor.mirage2,
    "editorSuggestWidget.foreground": common.gray[100],
    "editorSuggestWidget.highlightForeground": common.yellow,
    "editorSuggestWidget.selectedBackground": editor.outerSpace,
    "editorWarning.border": `${common.white}00`,
    "editorWarning.foreground": common.yellow,
    "editorWhitespace.foreground": `${common.white}1a`,
    "editorWidget.background": editor.mirage2,
    "editorWidget.border": editor.limedSpruce,
    errorForeground: common.danger,
    "extensionButton.prominentBackground": common.primary.main,
    "extensionButton.prominentForeground": common.white,
    "extensionButton.prominentHoverBackground": common.primary.main,
    focusBorder: editor.limedSpruce,
    foreground: common.gray[100],
    "gitDecoration.addedResourceForeground": editor.aquaForest,
    "gitDecoration.conflictingResourceForeground": editor.scooter,
    "gitDecoration.deletedResourceForeground": common.danger,
    "gitDecoration.ignoredResourceForeground": editor.riverBed,
    "gitDecoration.modifiedResourceForeground": common.yellow,
    "gitDecoration.untrackedResourceForeground": common.green,
    "input.background": editor.limedSpruce,
    "input.border": editor.limedSpruce,
    "input.foreground": common.gray[100],
    "input.selectionBackground": common.primary.main,
    "input.placeholderForeground": common.gray[100],
    "inputOption.activeBorder": editor.dodgerBlue2,
    "inputValidation.errorBackground": `${common.danger}99`,
    "inputValidation.errorBorder": common.danger,
    "inputValidation.errorForeground": common.white,
    "inputValidation.infoBackground": editor.limedSpruce,
    "inputValidation.infoBorder": common.primary.main,
    "inputValidation.infoForeground": common.white,
    "inputValidation.warningBorder": common.rawSienna,
    "inputValidation.warningForeground": common.white,
    "list.activeSelectionBackground": common.gray[200],
    "list.activeSelectionForeground": common.gray[100],
    "list.activeSelectionIconForeground": common.white,
    "list.dropBackground": editor.limedSpruce,
    "list.focusBackground": editor.limedSpruce,
    "list.focusForeground": common.gray[100],
    "list.highlightForeground": common.gray[500],
    "list.hoverBackground": common.gray[200],
    "list.hoverForeground": common.gray[100],
    "list.inactiveSelectionBackground": editor.limedSpruce,
    "list.inactiveSelectionForeground": common.gray[100],
    "menu.background": editor.shark,
    "menu.foreground": common.silver,
    "minimap.errorHighlight": common.danger,
    "minimap.selectionHighlight": common.gray[500],
    "minimap.warningHighlight": editor.rawSienna,
    "minimapGutter.addedBackground": common.green,
    "minimapGutter.deletedBackground": common.danger,
    "minimapSlider.background": `${common.primary.main}40`,
    "minimapSlider.hoverBackground": `${common.primary.main}66`,
    "notificationCenterHeader.background": editor.gableGreen,
    "notificationLink.foreground": common.gray[300],
    "notifications.background": editor.mirage2,
    "notifications.border": editor.gableGreen,
    "notifications.foreground": common.gray[100],
    "notificationsErrorIcon.foreground": common.danger,
    "notificationsInfoIcon.foreground": common.gray[100],
    "notificationsWarningIcon.foreground": editor.rawSienna,
    "panel.background": common.gray[800],
    "panel.border": common.gray[800],
    "panelTitle.activeBorder": editor.riverBed,
    "panelTitle.activeForeground": editor.riverBed,
    "panelTitle.inactiveForeground": common.gray[100],
    "peekView.border": editor.limedSpruce,
    "peekViewEditor.background": editor.mirage2,
    "peekViewEditor.matchHighlightBackground": editor.limedSpruce,
    "peekViewEditorGutter.background": editor.limedSpruce,
    "peekViewResult.background": editor.mirage2,
    "peekViewResult.fileForeground": common.gray[100],
    "peekViewResult.lineForeground": common.white,
    "peekViewResult.matchHighlightBackground": editor.limedSpruce,
    "peekViewResult.selectionBackground": editor.limedSpruce,
    "peekViewResult.selectionForeground": common.white,
    "peekViewTitle.background": editor.mirage2,
    "peekViewTitleDescription.foreground": common.gray[100],
    "peekViewTitleLabel.foreground": common.primary.main,
    "pickerGroup.border": editor.limedSpruce,
    "pickerGroup.foreground": common.gray[100],
    "ports.iconRunningProcessForeground": editor.apple,
    "progressBar.background": common.primary.main,
    "scrollbar.shadow": `${common.black}00`,
    "scrollbarSlider.activeBackground": editor.limedSpruce,
    "scrollbarSlider.background": `${editor.riverBed}80`,
    "scrollbarSlider.hoverBackground": `${editor.riverBed}cc`,
    "selection.background": syntax.azureRadiance,
    "sideBar.background": common.gray[800],
    "sideBar.border": common.gray[900],
    "sideBar.foreground": common.gray[100],
    "sideBarSectionHeader.background": common.gray[900],
    "sideBarSectionHeader.border": `${common.silver}33`,
    "sideBarSectionHeader.foreground": common.gray[100],
    "sideBarTitle.foreground": common.gray[100],
    "statusBar.background": common.gray[800],
    "statusBar.border": common.gray[900],
    "statusBar.debuggingBackground": common.gray[100],
    "statusBar.debuggingForeground": common.gray[800],
    "statusBar.foreground": common.gray[100],
    "statusBar.noFolderBackground": common.gray[800],
    "statusBar.noFolderForeground": common.gray[100],
    "statusBarItem.activeBackground": editor.limedSpruce,
    "statusBarItem.hoverBackground": editor.limedSpruce,
    "statusBarItem.prominentBackground": common.gray[800],
    "statusBarItem.prominentHoverBackground": editor.limedSpruce,
    "statusBarItem.remoteBackground": editor.genoa,
    "statusBarItem.remoteForeground": common.white,
    "tab.activeBackground": common.gray[900],
    "tab.activeBorder": common.gray[900],
    "tab.activeForeground": common.white,
    "tab.border": common.gray[800],
    "tab.inactiveBackground": common.gray[800],
    "tab.inactiveForeground": common.gray[100],
    "tab.lastPinnedBorder": `${common.silver}33`,
    "tab.unfocusedActiveForeground": common.gray[100],
    "tab.unfocusedInactiveForeground": common.gray[100],

    "terminal.ansiBlack": terminal.black,
    "terminal.ansiBlue": terminal.blue,
    "terminal.ansiBrightBlack": terminal.brightBlack,
    "terminal.ansiBrightBlue": terminal.brightBlue,
    "terminal.ansiBrightCyan": terminal.brightCyan,
    "terminal.ansiBrightGreen": terminal.brightGreen,
    "terminal.ansiBrightMagenta": terminal.brightMagenta,
    "terminal.ansiBrightRed": terminal.brightRed,
    "terminal.ansiBrightWhite": terminal.brightWhite,
    "terminal.ansiBrightYellow": terminal.brightYellow,
    "terminal.ansiCyan": terminal.cyan,
    "terminal.ansiGreen": terminal.green,
    "terminal.ansiMagenta": terminal.magenta,
    "terminal.ansiRed": terminal.red,
    "terminal.ansiWhite": terminal.white,
    "terminal.ansiYellow": terminal.yellow,
    "terminal.background": terminal.background,
    "terminal.foreground": terminal.foreground,
    "terminalCursor.background": terminal.cursor.background,
    "terminalCursor.foreground": terminal.cursor.foreground,

    "textBlockQuote.background": common.gray[100],
    "textBlockQuote.border": common.gray[100],
    "textCodeBlock.background": `${common.gray[100]}33`,
    "textLink.activeForeground": common.gray[300],
    "textLink.foreground": common.gray[300],
    "textPreformat.foreground": common.gray[300],
    "textSeparator.foreground": common.gray[300],
    "titleBar.activeBackground": common.gray[800],
    "titleBar.activeForeground": common.white,
    "titleBar.inactiveBackground": common.gray[900],
    "titleBar.inactiveForeground": `${common.white}33`,
    "walkThrough.embeddedEditorBackground": common.gray[900],
    "widget.shadow": `${common.black}26`,
  },
  tokenColors: [
    {
      scope: ["meta.embedded", "source.groovy.embedded"],
      settings: {
        foreground: common.white,
      },
    },
    {
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: common.gray[100],
      },
    },

    {
      scope: "emphasis",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "strong",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      scope: "header",
      settings: {
        foreground: syntax.navyBlue,
      },
    },
    {
      scope: "comment",
      settings: {
        foreground: syntax.fernGreen,
        fontStyle: "italic",
      },
    },
    {
      scope: ["constant.language", "storage.type.function.arrow"],
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: [
        "constant.numeric",
        "variable.other.enummember",
        "keyword.operator.plus.exponent",
        "keyword.operator.minus.exponent",
      ],
      settings: {
        foreground: syntax.coriander,
      },
    },
    {
      scope: "constant.regexp",
      settings: {
        foreground: syntax.kimberly,
      },
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: "entity.name.tag.css",
      settings: {
        foreground: syntax.straw,
      },
    },
    {
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.class.mixin.css",
        "entity.other.attribute-name.id.css",
        "entity.other.attribute-name.parent-selector.css",
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
        "source.css.less entity.other.attribute-name.id",
        "entity.other.attribute-name.scss",
      ],
      settings: {
        foreground: syntax.straw,
      },
    },
    {
      scope: "invalid",
      settings: {
        foreground: common.danger,
      },
    },
    {
      scope: "markup.underline",
      settings: {
        fontStyle: "underline",
      },
    },
    {
      scope: "markup.bold",
      settings: {
        foreground: syntax.havelockBlue,
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.heading",
      settings: {
        foreground: syntax.havelockBlue,
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      scope: "markup.strikethrough",
      settings: {
        fontStyle: "strikethrough",
      },
    },
    {
      scope: "markup.inserted",
      settings: {
        foreground: syntax.coriander,
      },
    },
    {
      name: "Deleted line markup",
      scope: "markup.deleted",
      settings: {
        foreground: common.danger,
      },
    },
    {
      name: "Changed line markup",
      scope: "markup.changed",
      settings: {
        foreground: common.yellow,
      },
    },
    {
      scope: [
        "punctuation.terminator.statement",
        "punctuation.separator.key-value",
        "keyword.operator.type.annotation",
      ],
      settings: {
        foreground: `${common.gray[300]}`,
      },
    },
    {
      scope: ["keyword.operator.assignment", "keyword.operator.comparison"],
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: "punctuation.definition.quote.begin.markdown",
      settings: {
        foreground: syntax.chaletGreen,
      },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: syntax.cornflowerBlue,
      },
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: `${syntax.myPink}ec`,
      },
    },
    {
      scope: "punctuation.definition.tag",
      settings: {
        foreground: common.gray[400],
      },
    },
    {
      scope: ["meta.preprocessor", "entity.name.function.preprocessor"],
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: "meta.preprocessor.string",
      settings: {
        foreground: syntax.myPink,
      },
    },
    {
      scope: "meta.preprocessor.numeric",
      settings: {
        foreground: syntax.coriander,
      },
    },
    {
      scope: "meta.structure.dictionary.key.python",
      settings: {
        foreground: syntax.anakiwa,
      },
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: "storage",
      settings: {
        foreground: `${syntax.havelockBlue}e0`,
      },
    },
    {
      scope: ["storage.modifier", "keyword.operator.noexcept"],
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: ["string", "meta.embedded.assembly"],
      settings: {
        foreground: syntax.myPink,
      },
    },
    {
      scope: "string.tag",
      settings: {
        foreground: syntax.myPink,
      },
    },
    {
      scope: "string.value",
      settings: {
        foreground: syntax.myPink,
      },
    },
    {
      scope: "string.regexp",
      settings: {
        foreground: syntax.chestnutRose,
      },
    },
    {
      scope: [
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded",
      ],
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: ["meta.template.expression"],
      settings: {
        foreground: common.white,
      },
    },
    {
      scope: [
        "support.type.vendored.property-name",
        "support.type.property-name",
        "variable.css",
        "variable.scss",
        "variable.other.less",
        "source.coffee.embedded",
      ],
      settings: {
        foreground: syntax.anakiwa,
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: "keyword.control",
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: "keyword.operator",
      settings: {
        foreground: common.white,
      },
    },
    {
      scope: [
        "keyword.operator.new",
        "keyword.operator.expression",
        "keyword.operator.cast",
        "keyword.operator.sizeof",
        "keyword.operator.alignof",
        "keyword.operator.typeid",
        "keyword.operator.alignas",
        "keyword.operator.instanceof",
        "keyword.operator.logical.python",
        "keyword.operator.wordlike",
      ],
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: "keyword.other.unit",
      settings: {
        foreground: syntax.coriander,
      },
    },
    {
      scope: [
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php",
      ],
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: "support.function.git-rebase",
      settings: {
        foreground: syntax.anakiwa,
      },
    },
    {
      scope: "constant.sha.git-rebase",
      settings: {
        foreground: syntax.coriander,
      },
    },
    {
      scope: [
        "storage.modifier.import.java",
        "variable.language.wildcard.java",
        "storage.modifier.package.java",
      ],
      settings: {
        foreground: common.white,
      },
    },
    {
      scope: "variable.language",
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "support.constant.handlebars",
        "source.powershell variable.other.member",
        "entity.name.operator.custom-literal",
      ],
      settings: {
        foreground: syntax.sapling,
      },
    },
    {
      scope: [
        "support.class",
        "support.type",
        "entity.name.type",
        "entity.name.namespace",
        "entity.other.attribute",
        "entity.name.scope-resolution",
        "entity.name.class",
        "storage.type.numeric.go",
        "storage.type.byte.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
        "storage.type.uintptr.go",
        "storage.type.error.go",
        "storage.type.rune.go",
        "storage.type.cs",
        "storage.type.generic.cs",
        "storage.type.modifier.cs",
        "storage.type.variable.cs",
        "storage.type.annotation.java",
        "storage.type.generic.java",
        "storage.type.java",
        "storage.type.object.array.java",
        "storage.type.primitive.array.java",
        "storage.type.primitive.java",
        "storage.type.token.java",
        "storage.type.groovy",
        "storage.type.annotation.groovy",
        "storage.type.parameters.groovy",
        "storage.type.generic.groovy",
        "storage.type.object.array.groovy",
        "storage.type.primitive.array.groovy",
        "storage.type.primitive.groovy",
      ],
      settings: {
        foreground: syntax.puertoRico,
      },
    },
    {
      scope: [
        "meta.type.cast.expr",
        "meta.type.new.expr",
        "support.constant.math",
        "support.constant.dom",
        "support.constant.json",
        "entity.other.inherited-class",
      ],
      settings: {
        foreground: syntax.puertoRico,
      },
    },
    {
      scope: [
        "keyword.control",
        "source.cpp keyword.operator.new",
        "keyword.operator.delete",
        "keyword.other.using",
        "keyword.other.operator",
        "entity.name.operator",
      ],
      settings: {
        foreground: syntax.viola,
      },
    },
    {
      scope: [
        "variable",
        "meta.definition.variable.name",
        "support.variable",
        "entity.name.variable",
        "constant.other.placeholder",
      ],
      settings: {
        foreground: syntax.anakiwa,
      },
    },
    {
      scope: ["meta.object-literal.key"],
      settings: {
        foreground: `${common.danger}cc`,
      },
    },
    {
      scope: [
        "variable.other.object",
        "variable.other.object.property",
        "variable.other.property",
      ],
      settings: {
        foreground: syntax.anakiwa,
      },
    },
    {
      scope: ["variable.other.constant", "variable.other.enummember"],
      settings: {
        foreground: common.blue,
      },
    },
    {
      scope: [
        "support.constant.property-value",
        "support.constant.font-name",
        "support.constant.media-type",
        "support.constant.media",
        "constant.other.color.rgb-value",
        "constant.other.rgb-value",
        "support.constant.color",
      ],
      settings: {
        foreground: syntax.myPink,
      },
    },
    {
      scope: [
        "punctuation.definition.group.regexp",
        "punctuation.definition.group.assertion.regexp",
        "punctuation.definition.character-class.regexp",
        "punctuation.character.set.begin.regexp",
        "punctuation.character.set.end.regexp",
        "keyword.operator.negation.regexp",
        "support.other.parenthesis.regexp",
      ],
      settings: {
        foreground: syntax.myPink,
      },
    },
    {
      scope: [
        "constant.character.character-class.regexp",
        "constant.other.character-class.set.regexp",
        "constant.other.character-class.regexp",
        "constant.character.set.regexp",
      ],
      settings: {
        foreground: syntax.chestnutRose,
      },
    },
    {
      scope: [
        "keyword.control.import",
        "keyword.control.export",
        "keyword.control.from",
        "keyword.control.default",
      ],
      settings: {
        foreground: `${syntax.viola}b0`,
      },
    },
    {
      scope: ["keyword.operator.or.regexp", "keyword.control.anchor.regexp"],
      settings: {
        foreground: syntax.sapling,
      },
    },
    {
      scope: "keyword.operator.quantifier.regexp",
      settings: {
        foreground: syntax.straw,
      },
    },
    {
      scope: "constant.character",
      settings: {
        foreground: syntax.havelockBlue,
      },
    },
    {
      scope: "constant.character.escape",
      settings: {
        foreground: syntax.straw,
      },
    },
    {
      scope: "entity.name.label",
      settings: {
        foreground: common.silver,
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: syntax.cornflowerBlue,
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: syntax.hokeyPokey,
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: common.danger,
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: syntax.mediumPurlple,
      },
    },
    {
      name: "Inserted line markup",
      scope: "markup.inserted",
      settings: {
        foreground: common.green,
      },
    },
    {
      name: "Deleted line markup",
      scope: "markup.deleted",
      settings: {
        foreground: common.danger,
      },
    },
    {
      name: "Changed line markup",
      scope: "markup.changed",
      settings: {
        foreground: common.yellow,
      },
    },
  ],
  semanticHighlighting: true,
}
