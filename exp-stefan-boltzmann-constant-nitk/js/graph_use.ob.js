var _$_9348 = [
  "",
  "top",
  "center",
  "bold",
  "calibri",
  "dimGrey",
  "spline",
  "Float",
  "Chart",
  "render",
];
function drawgraph(_0x95EF, _0x95BF, _0x961F, _0x964F) {
  var _0x958F = new CanvasJS[_$_9348[8]](_0x95EF, {
    backgroundColor: "transparent",
    position: "relative",
    display: "inline-block",
    zoomEnabled: true,
    title: { text: _$_9348[0] },
    toolTip: { shared: false },
    legend: {
      verticalAlign: _$_9348[1],
      horizontalAlign: _$_9348[2],
      fontSize: 14,
      fontWeight: _$_9348[3],
      fontFamily: _$_9348[4],
      fontColor: _$_9348[5],
    },
    axisX: { title: _0x961F },
    axisY: { title: _0x964F, includeZero: false },
    data: [
      {
        type: _$_9348[6],
        xValueType: _$_9348[7],
        showInLegend: false,
        name: _$_9348[0],
        markerSize: 2,
        dataPoints: _0x95BF,
      },
    ],
  });
  _0x958F[_$_9348[9]]();
}
