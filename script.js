{/* <div class="col-12 col-md-6 col-lg-4 mt-2 p-2">
    <div class="card border rounded-3">
        <div class="p-3 position-relative cardimg">
            <i class="fa-regular fa-heart position-absolute"></i>
            <img src="https://source.unsplash.com/random" class="card-img-top border rounded-2"
                alt="...">
        </div>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text mb-4">aisgidas ... <span class="read-more btn">Read More</span></p>
            <span class=" border rounded-5 p-2 text-bg-secondary">categories</span>
            <div class="d-flex justify-content-between mt-4">
                <div class="">
                    <p class="mb-2 Price">Price</p>
                    <p class="dollar">$ 1200</p>
                </div>
                <div>
                    <a href="#" class="btn btn-success">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</div> */}
const cardlar = document.querySelector('.cardlar')
console.log(cardlar)
window.addEventListener(`load`, getmelumatlarigetir)
async function getmelumatlarigetir() {
    const unvan = 'https://fakestoreapi.com/products'
    try {

        const cavab = await fetch(unvan)
        const frontagelecekmelumatlar = await cavab.json()
        console.log(frontagelecekmelumatlar)
        for (let i = 0; i < 12; i++) {
            cardlar.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 mt-2 p-2">
    <div class="card border rounded-3">
        <div class="p-3 position-relative cardimg">
            <i class="fa-regular fa-heart position-absolute" onclick="addFavouriteList(this)"></i>
            <img src='${frontagelecekmelumatlar[i].image}'class="card-img-top rounded-2"
                alt="...">
        </div>
        <div class="card-body mt-3">
            <h5 class="card-title">${frontagelecekmelumatlar[i].title}</h5>
            <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="mt-2">
                    <p class="mb-2 Price">Price</p>
                    <p class="dollar">$ ${frontagelecekmelumatlar[i].price}</p>
                </div>
                <div>
                <span class=" border rounded-5 p-2 text-bg-secondary">${frontagelecekmelumatlar[i].category}</span>
                </div>
            </div>
        </div>
    </div>
</div> 
            `
        }
    }
    catch (xeta) {
        console.log(`Xəta baş verib: ${xeta}`)
        setTimeout(function () {
            document.querySelector(`Xəta baş verdi. Səyfəni yeniləməyiniz xahiş olunur.`).innerText = xeta
        },5000)

}


function addFavouriteList(element) {
    element.classList.toggle("fa-regular")
    element.classList.toggle("fa-solid")
    
    }
}