var onRun = function(context) {
  var doc = context.document

  var handler = context.document.eventHandlerManager().normalHandler()
  var userSelected = handler.selectedRect()

  var originalShape = userSelected.origin
  var originalSize = userSelected.size

  var artboard = MSArtboardGroup.new()
  var artboardFrame = artboard.frame()


  artboardFrame.setX(originalShape.x-100)
  artboardFrame.setY(originalShape.y-100)
  artboardFrame.setWidth(originalSize.width+200)
  artboardFrame.setHeight(originalSize.height+200)

  artboard.hasBackgroundColor = true
  artboard.backgroundColor = MSImmutableColor.colorWithSVGString("#4A4A4A")

  doc.currentPage().insertLayer_atIndex(artboard, 0)

};
