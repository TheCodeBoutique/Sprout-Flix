sc_require('views/just_added_custom_cell');
SproutFlix.JustAddedGridView = SC.View.extend({

    childViews:'justAddedTrailers'.w(),

    justAddedTrailers: SC.ScrollView.design({

        layout: { top: 285, bottom:0, left: 0, right:0},

        contentView:SC.GridView.design({
            classNames:'just-added-grid'.w(),
            contentBinding: 'SproutFlix.justAddedController.arrangedObjects',
            selectionBinding: 'SproutFlix.justAddedController.selection',
            contentValueKey: "title",
            contentIconKey: "poster",
            exampleView: SproutFlix.JustAddedCustomCell,
            hasContentIcon:  YES,
            escapeHTML: NO,
            rowHeight: 270,
            columnWidth: 170,
            actOnSelect:YES

        })
    })
});