import { createDisplayName } from "../js/common/displayname.js"

document.addEventListener("DOMContentLoaded", function () {

    let pn_id
    countGaugeActive()
    createDisplayName(pn_list,pn_id)
})

function searchProductDetail(){
    const bcdElm = document.getElementById("bcd-search-btn")
    bcdElm.document.addEventListener("click",function(){
        const bcdInfo = document.getElementById("bcd-search-btn")
        bcdInfo.value.trim();
        



    })

}


function inputProductId(){
    const pn_id = document.getElementById("input-shelf")
    return pn_id
}

function countGaugeActive() {
    const maxBlocks = 3
    const blocks = document.querySelectorAll(".gauge-block")
    const plusBtn = document.querySelector(".plus-btn")
    const minusBtn = document.querySelector(".minus-btn")
    let currentBlocks = 0

    plusBtn.addEventListener('click', () => {
        if (currentBlocks < maxBlocks) {
            blocks[currentBlocks].classList.add('active');
            currentBlocks++;
        }
    });

    minusBtn.addEventListener('click', () => {
        if (currentBlocks > 0) {
            currentBlocks--;
            blocks[currentBlocks].classList.remove('active');
        }
    });

}