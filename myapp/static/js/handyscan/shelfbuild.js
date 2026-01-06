import { createDisplayName } from "../js/common/displayname.js"
import { get_shelf_info } from "../common/data_fetch.js"


/*
要件：棚の情報を描画
構築する棚構造
・セルのIDを読み取り、棚の行 / 列を動的に構築
・セルのIDを読み取りcell_stock_statusから格納情報の構築
・



*/

// 要件
const shelf_serch_btn = document.getElementById("shelf-search-btn")
shelf_serch_btn.addEventListener("click",function(){
    /* 入力されたCell_idから棚IDを取得し、棚の「行」「列」情報に合わせて棚構造を描画
    
    
    */

    // 棚情報の取得
    const cell_id = document.getElementById("input-shelf")
    const shelf_info = get_shelf_info(cell_id)
   
    // 棚構造によって独自クラス名をつける
    const shelfContainer = document.getElementById("shelf-container")
    const shelfGrid = document.getElementById("cell-grid")

    const stockCellNum = shelf_info.column * shelf_info.row
    
    // stockCellNum数分、cell-containerの数を増やす

})

function buildShelfStructure(cell_id){
    
}
