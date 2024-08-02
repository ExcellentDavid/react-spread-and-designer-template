import './SpreadView.css'
import '@grapecity-software/spread-sheets/styles/gc.spread.sheets.excel2013white.css'
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
import { useEffect, useRef } from 'react'

GC.Spread.Common.CultureManager.culture('zh-cn')

let spread
let sheet
const initSpread = (spreadContainerRef) => {
  spread = new GC.Spread.Sheets.Workbook(spreadContainerRef.current)
  sheet = spread.getActiveSheet()

  // 为方便调试引入下方代码，生产环境请移除
  window.GC = GC
  window.spread = spread
  window.sheet = sheet

  // 业务逻辑，不一定写在这里
  sheet
    .getCell(0, 0)
    .value('当前为 Spread 示例，点击下方链接跳转到 Designer 示例')
  let linkStyle = new GC.Spread.Sheets.CellTypes.HyperLink()
  linkStyle.text('跳转到 Designer 示例')
  sheet.setCellType(1, 0, linkStyle)
  sheet
    .getCell(1, 0)
    .value('./designer')
    .hAlign(GC.Spread.Sheets.HorizontalAlign.left)
  sheet.autoFitColumn(0)


}
function SpreadView() {
  const spreadContainerRef = useRef(null)
  useEffect(() => {
    initSpread(spreadContainerRef)
  }, [])
    return (
        <>
          <div id={'spread-container'} ref={spreadContainerRef}></div>
        </>
    )
}

export default SpreadView