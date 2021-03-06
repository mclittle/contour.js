
const eShapeType = {
    undeformed: 0,
    deformed: 1
};

export default class DrawContourArgs {
    constructor () {
        this.drawResult = "";
        this.drawNodes = false;
        this.drawEdges = true;
        this.shapeType = eShapeType.undeformed;
        this.display = "elementName";
        this.scaleFactor = 1.0;
    };

    update (other) {
        if (other == null) return;

        this.drawResult = other.drawResult != null ? other.drawResult : this.drawResult;
        this.drawNodes = other.drawNodes != null ? other.drawNodes : this.drawNodes;
        this.drawEdges = other.drawEdges != null ? other.drawEdges : this.drawEdges;
        this.shapeType = other.shapeType != null ? other.shapeType : this.shapeType;
        this.display = other.display != null ? other.display : this.display;
        this.scaleFactor = other.scaleFactor != null ? other.scaleFactor : this.scaleFactor;
    };
}