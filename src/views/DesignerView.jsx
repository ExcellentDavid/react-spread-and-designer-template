import './DesignerView.css'
import '@grapecity-software/spread-sheets/styles/gc.spread.sheets.excel2013white.css'
import '@grapecity-software/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css'
import GC from '@grapecity-software/spread-sheets'
import '@grapecity-software/spread-sheets-shapes'
import '@grapecity-software/spread-sheets-charts'
import '@grapecity-software/spread-sheets-slicers'
import '@grapecity-software/spread-sheets-print'
import '@grapecity-software/spread-sheets-barcode'
import '@grapecity-software/spread-sheets-pdf'
import '@grapecity-software/spread-sheets-pivot-addon'
import '@grapecity-software/spread-sheets-tablesheet'
import '@grapecity-software/spread-sheets-ganttsheet'
import '@grapecity-software/spread-sheets-formula-panel'
import '@grapecity-software/spread-sheets-reportsheet-addon'
import '@grapecity-software/spread-sheets-io'
import '@grapecity-software/spread-excelio'
import '@grapecity-software/spread-sheets-resources-zh'
// 注意：spread-sheets-designer-resources-cn 与 spread-sheets-designer 的先后顺序
import '@grapecity-software/spread-sheets-designer-resources-cn'
import '@grapecity-software/spread-sheets-designer'
import { useEffect, useRef } from 'react'

GC.Spread.Common.CultureManager.culture('zh-cn')

let designer
let spread
let sheet
const initDesigner = (designerContainerRef) => {
  designer = new GC.Spread.Sheets.Designer.Designer(designerContainerRef.current)
  spread = designer.getWorkbook()
  sheet = spread.getActiveSheet()

  // 为方便调试引入下方代码，生产环境请移除
  window.GC = GC
  window.designer = designer
  window.spread = spread
  window.sheet = sheet

  // 业务逻辑，不一定写在这里
  sheet
    .getCell(0, 0)
    .value('当前为 Designer 示例，点击下方链接跳转到 Spread 示例')
  let linkStyle = new GC.Spread.Sheets.CellTypes.HyperLink()
  linkStyle.text('跳转到 Spread 示例')
  sheet.setCellType(1, 0, linkStyle)
  sheet
    .getCell(1, 0)
    .value('./spread')
    .hAlign(GC.Spread.Sheets.HorizontalAlign.left)
  sheet.autoFitColumn(0)
}

function DesignerView() {
  const designerContainerRef = useRef(null)
  useEffect(() => {
    initDesigner(designerContainerRef)
  }, [])
  return (
    <>
      <div id={'designer-container'} ref={designerContainerRef}></div>
    </>
  )
}

export default DesignerView