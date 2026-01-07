import { createDisplayName } from '../common/displayname.js';

document.addEventListener("DOMContentLoaded", function () {

    searchProductDetail()
    countGaugeActive()

})

function searchProductDetail() {
    /*
    Note
    -------------------------
    かんばんバーコードを読み込むと製品情報が出力
    ※すでにラベル要素がある場合はinnerTextを上書き
    */
    const bcdElm = document.getElementById("bcd-search-btn")
    bcdElm.addEventListener("click", function () {
        const bcdInfo = document.getElementById("bcd-search-form")
        const pn_id = bcdInfo.value.trim();
        const pnInfo = createDisplayName(pn_list, pn_id)
        const itemDetailBox = document.getElementById("item-detail-box")
        if (document.getElementById("pn-detail-label")) {
            let pnDetailLabel = document.getElementById("pn-detail-label")
            pnDetailLabel.innerText = pnInfo.displayName
            itemDetailBox.appendChild(pnDetailLabel)
        } else {
            let pnDetailLabel = document.createElement("label")
            pnDetailLabel.id = "pn-detail-label";
            pnDetailLabel.innerText = pnInfo.displayName
            itemDetailBox.appendChild(pnDetailLabel)
        }


    })

}


function pushCancelBtnInputClear(){
    const bcdInfo = document.getElementById("bcd-search-form")
    bcdInfo.innerText="";
    let pnDetailLabel = document.getElementById("pn-detail-label")
    pnDetailLabel.innerText = 0;
    
}

function inputProductId() {
    const pn_id = document.getElementById("input-shelf")
    return pn_id
}

function countGaugeActive() {
    const maxBlocks = 3
    const blocks = document.querySelectorAll(".gauge-block")
    const plusBtn = document.querySelector(".plus-btn")
    const minusBtn = document.querySelector(".minus-btn")
    let currentBlocks = 0
    let itemCountElm = document.getElementById("item-count")

    plusBtn.addEventListener('click', () => {
        if (currentBlocks < maxBlocks) {
            blocks[currentBlocks].classList.add('active');
            currentBlocks++;
            itemCountElm.innerText = currentBlocks;
        }
    });

    minusBtn.addEventListener('click', () => {
        if (currentBlocks > 0) {
            currentBlocks--;
            blocks[currentBlocks].classList.remove('active');
            itemCountElm.innerText = currentBlocks;
        }
    });

}