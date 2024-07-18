// خدمات در ترکیه باز و بسته شدنش
let khadamatTurkie = document.querySelector(".khadamat-turkie");
let khadamatTurkieHover = document.querySelector(".khadamat-turkie-hover");
let NeshooneAfterHover = document.querySelector(".after-hover");
let neshooneBeforeHover = document.querySelector(".before-hover");

khadamatTurkie.addEventListener("click", () => {
  khadamatTurkieHover.classList.toggle("show");
  NeshooneAfterHover.classList.toggle("show");
  neshooneBeforeHover.classList.toggle("hide");
});

// نارنجی شدن خدمات در ترکیه ساب منو وقتی روش هاور میشه نشونه
//  اولین دسته بندی ساب منو ترکیه
let subMenuKhadamatTurkie1 = document.querySelector(".dasteBandi-turkie-1");
let subMenuArrowturkie1 = document.querySelector(".submenu-turkie-arrow-1");

subMenuKhadamatTurkie1.addEventListener("mouseenter", () => {
  subMenuArrowturkie1.classList.add("show");
});
subMenuKhadamatTurkie1.addEventListener("mouseleave", () => {
  subMenuArrowturkie1.classList.remove("show");
});
//  دومین دسته بندی ساب منو ترکیه
let subMenuKhadamatTurkie2 = document.querySelector(".dasteBandi-turkie-2");
let subMenuArrowturkie2 = document.querySelector(".submenu-turkie-arrow-2");

subMenuKhadamatTurkie2.addEventListener("mouseenter", () => {
  subMenuArrowturkie2.classList.add("show");
});
subMenuKhadamatTurkie2.addEventListener("mouseleave", () => {
  subMenuArrowturkie2.classList.remove("show");
});

//  سومین دسته بندی ساب منو ترکیه
let subMenuKhadamatTurkie3 = document.querySelector(".dasteBandi-turkie-3");
let subMenuArrowturkie3 = document.querySelector(".submenu-turkie-arrow-3");

subMenuKhadamatTurkie3.addEventListener("mouseenter", () => {
  subMenuArrowturkie3.classList.add("show");
});
subMenuKhadamatTurkie3.addEventListener("mouseleave", () => {
  subMenuArrowturkie3.classList.remove("show");
});
//  چهارمین دسته بندی ساب منو ترکیه
let subMenuKhadamatTurkie4 = document.querySelector(".dasteBandi-turkie-4");
let subMenuArrowturkie4 = document.querySelector(".submenu-turkie-arrow-4");

subMenuKhadamatTurkie4.addEventListener("mouseenter", () => {
  subMenuArrowturkie4.classList.add("show");
});
subMenuKhadamatTurkie4.addEventListener("mouseleave", () => {
  subMenuArrowturkie4.classList.remove("show");
});
//  پنجمین دسته بندی ساب منو ترکیه
let subMenuKhadamatTurkie5 = document.querySelector(".dasteBandi-turkie-5");
let subMenuArrowturkie5 = document.querySelector(".submenu-turkie-arrow-5");

subMenuKhadamatTurkie5.addEventListener("mouseenter", () => {
  subMenuArrowturkie5.classList.add("show");
});
subMenuKhadamatTurkie5.addEventListener("mouseleave", () => {
  subMenuArrowturkie5.classList.remove("show");
});
// خدمات در قبرس باز و بسته شدن
let khadamatGhebres = document.querySelector(".khadamat-ghebres");
let khadamatGhebresSubMenu = document.querySelector(".khadamat-ghebres-hover");
let neshooneAfterClick = document.querySelector(".ghebres-after-neshoone");
let neshooneBeforeClick = document.querySelector(".ghebres-before-neshoone");

khadamatGhebres.addEventListener("click", () => {
  khadamatGhebresSubMenu.classList.toggle("show");
  neshooneAfterClick.classList.toggle("show");
  neshooneBeforeClick.classList.toggle("hide");
});
// نارنجی شدن ساب منو وقتی موس میره روش قسمت خدمات در قبرس
// اولین دسته بندی ساب منو
let subMenuKhadamatghebres2 = document.querySelector(".dasteBandi-ghebres-2");
let subMenuArrowghebres2 = document.querySelector(".submenu-ghebres-arrow-2");

subMenuKhadamatghebres2.addEventListener("mouseenter", () => {
  subMenuArrowghebres2.classList.add("show");
});
subMenuKhadamatghebres2.addEventListener("mouseleave", () => {
  subMenuArrowghebres2.classList.remove("show");
});

// دومی دسته بندی ساب منو
let subMenuKhadamatghebres1 = document.querySelector(".dasteBandi-ghebres-1");
let subMenuArrowghebres1 = document.querySelector(".submenu-ghebres-arrow-1");

subMenuKhadamatghebres1.addEventListener("mouseenter", () => {
  subMenuArrowghebres1.classList.add("show");
});
subMenuKhadamatghebres1.addEventListener("mouseleave", () => {
  subMenuArrowghebres1.classList.remove("show");
});

// سومی دسته بندی ساب منو
let subMenuKhadamatghebres3 = document.querySelector(".dasteBandi-ghebres-3");
let subMenuArrowghebres3 = document.querySelector(".submenu-ghebres-arrow-3");

subMenuKhadamatghebres3.addEventListener("mouseenter", () => {
  subMenuArrowghebres3.classList.add("show");
});
subMenuKhadamatghebres3.addEventListener("mouseleave", () => {
  subMenuArrowghebres3.classList.remove("show");
});

// چهارمی دسته بندی ساب منو
let subMenuKhadamatghebres4 = document.querySelector(".dasteBandi-ghebres-4");
let subMenuArrowghebres4 = document.querySelector(".submenu-ghebres-arrow-4");

subMenuKhadamatghebres4.addEventListener("mouseenter", () => {
  subMenuArrowghebres4.classList.add("show");
});
subMenuKhadamatghebres4.addEventListener("mouseleave", () => {
  subMenuArrowghebres4.classList.remove("show");
});

// پنجمی دسته بندی ساب منو
let subMenuKhadamatghebres5 = document.querySelector(".dasteBandi-ghebres-5");
let subMenuArrowghebres5 = document.querySelector(".submenu-ghebres-arrow-5");

subMenuKhadamatghebres5.addEventListener("mouseenter", () => {
  subMenuArrowghebres5.classList.add("show");
});
subMenuKhadamatghebres5.addEventListener("mouseleave", () => {
  subMenuArrowghebres5.classList.remove("show");
});

// قسمت پروفایل من

let myProfile = document.querySelectorAll(".my-profile");
let subMenuMyProfule = document.querySelector(".my-profile-submenu");
let dokmeBeforeCick = document.querySelector(".my-profile-dokme-before");
let dokmeAfterCick = document.querySelector(".my-profile-dokme-after");

myProfile.forEach(function (profile) {
  profile.addEventListener("click", () => {
    subMenuMyProfule.classList.toggle("show");
    dokmeBeforeCick.classList.toggle("hide");
    dokmeAfterCick.classList.toggle("show");
  });
});

// وقتی موس میره روی ساب منوهای پروفایل من نارنجی بشن
let dashboardSection = document.querySelector(".dashboard");
let arrowDashboardAfter = document.querySelector(".dashboard-arrow");

dashboardSection.addEventListener("mouseenter", () => {
  arrowDashboardAfter.classList.add("show");
});

dashboardSection.addEventListener("mouseleave", () => {
  arrowDashboardAfter.classList.remove("show");
});

// قسمت پروفایل
let profileSection = document.querySelector(".profile");
let arrowProfileAfter = document.querySelector(".profile-arrow");

profileSection.addEventListener("mouseenter", () => {
  arrowProfileAfter.classList.add("show");
});

profileSection.addEventListener("mouseleave", () => {
  arrowProfileAfter.classList.remove("show");
});

// قسمت سفارش

let sefareshSection = document.querySelector(".sefaresh");
let arrowSefareshAfter = document.querySelector(".sefaresh-arrow");

sefareshSection.addEventListener("mouseenter", () => {
  arrowSefareshAfter.classList.add("show");
});

sefareshSection.addEventListener("mouseleave", () => {
  arrowSefareshAfter.classList.remove("show");
});

// قسمت پیام ها

let massagesSection = document.querySelector(".massages");
let arrowMassagesAfter = document.querySelector(".massages-arrow");

massagesSection.addEventListener("mouseenter", () => {
  arrowMassagesAfter.classList.add("show");
});

massagesSection.addEventListener("mouseleave", () => {
  arrowMassagesAfter.classList.remove("show");
});

// قسمت خروج
let exitSection = document.querySelector(".exit");
let arrowExitAfter = document.querySelector(".exit-arrow");

exitSection.addEventListener("mouseenter", () => {
  arrowExitAfter.classList.add("show");
});

exitSection.addEventListener("mouseleave", () => {
  arrowExitAfter.classList.remove("show");
});

// قسمت سوالات متداول
// اولین accordion
let accordionFirst = document.querySelector(".accordion-button-1");
let arrowButton1Before = document.querySelector(".accordion-button1-img-1");
let arrowButton1After = document.querySelector(".accordion-button1-img-2");
let changeBgbutton1 = document.querySelector(".accordion-button1");
let changeTextColorButton1 = document.querySelector(".button1-text");
let questionIconBeforeButton1 = document.querySelector(".question-before-1");
let questionIconAfterButton1 = document.querySelector(".question-after-1");

accordionFirst.addEventListener("click", () => {
  arrowButton1Before.classList.toggle("hide");
  arrowButton1After.classList.toggle("show");
  changeBgbutton1.classList.toggle("show");
  changeTextColorButton1.classList.toggle("show");
  questionIconBeforeButton1.classList.toggle("hide");
  questionIconAfterButton1.classList.toggle("show");
});

// دومین accordion
let accordionSecond = document.querySelector(".accordion-button-2");
let arrowButton2Before = document.querySelector(".accordion-button2-img-1");
let arrowButton2After = document.querySelector(".accordion-button2-img-2");
let changeBgbutton2 = document.querySelector(".accordion-button2");
let changeTextColorButton2 = document.querySelector(".button2-text");
let questionIconBeforeButton2 = document.querySelector(".question-before-2");
let questionIconAfterButton2 = document.querySelector(".question-after-2");

accordionSecond.addEventListener("click", () => {
  arrowButton2Before.classList.toggle("hide");
  arrowButton2After.classList.toggle("show");
  changeBgbutton2.classList.toggle("show");
  changeTextColorButton2.classList.toggle("show");
  questionIconBeforeButton2.classList.toggle("hide");
  questionIconAfterButton2.classList.toggle("show");
});

// accordion سومین
let accordionThird = document.querySelector(".accordion-button-3");
let arrowButton3Before = document.querySelector(".accordion-button3-img-1");
let arrowButton3After = document.querySelector(".accordion-button3-img-2");
let changeBgbutton3 = document.querySelector(".accordion-button3");
let changeTextColorButton3 = document.querySelector(".button3-text");
let questionIconBeforeButton3 = document.querySelector(".question-before-3");
let questionIconAfterButton3 = document.querySelector(".question-after-3");

accordionThird.addEventListener("click", () => {
  arrowButton3Before.classList.toggle("hide");
  arrowButton3After.classList.toggle("show");
  changeBgbutton3.classList.toggle("show");
  changeTextColorButton3.classList.toggle("show");
  questionIconBeforeButton3.classList.toggle("hide");
  questionIconAfterButton3.classList.toggle("show");
});

// accordion چهارمین
let accordionFour = document.querySelector(".accordion-button-4");
let arrowButton4Before = document.querySelector(".accordion-button4-img-1");
let arrowButton4After = document.querySelector(".accordion-button4-img-2");
let changeBgbutton4 = document.querySelector(".accordion-button4");
let changeTextColorButton4 = document.querySelector(".button4-text");
let questionIconBeforeButton4 = document.querySelector(".question-before-4");
let questionIconAfterButton4 = document.querySelector(".question-after-4");

accordionFour.addEventListener("click", () => {
  arrowButton4Before.classList.toggle("hide");
  arrowButton4After.classList.toggle("show");
  changeBgbutton4.classList.toggle("show");
  changeTextColorButton4.classList.toggle("show");
  questionIconBeforeButton4.classList.toggle("hide");
  questionIconAfterButton4.classList.toggle("show");
});

// شیشمین accordion
let accordionSixth = document.querySelector(".accordion-button-6");
let arrowButton6Before = document.querySelector(".accordion-button6-img-1");
let arrowButton6After = document.querySelector(".accordion-button6-img-2");
let changeBgbutton6 = document.querySelector(".accordion-button6");
let changeTextColorButton6 = document.querySelector(".button6-text");
let questionIconBeforeButton6 = document.querySelector(".question-before-6");
let questionIconAfterButton6 = document.querySelector(".question-after-6");

accordionSixth.addEventListener("click", () => {
  arrowButton6Before.classList.toggle("hide");
  arrowButton6After.classList.toggle("show");
  changeBgbutton6.classList.toggle("show");
  changeTextColorButton6.classList.toggle("show");
  questionIconBeforeButton6.classList.toggle("hide");
  questionIconAfterButton6.classList.toggle("show");
});

// اسلایدر
const productContainer = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
});

// نقطه های اسلایدر

// برای کارت اول
let card1 = document.querySelector(".product-card1");
let colorCard1 = document.querySelector(".dot-1");

card1.addEventListener("mouseenter", () => {
  colorCard1.classList.add("show");
});

card1.addEventListener("mouseleave", () => {
  colorCard1.classList.remove("show");
});

// برای کارت دوم
let card2 = document.querySelector(".product-card2");
let colorCard2 = document.querySelector(".dot-2");

card2.addEventListener("mouseenter", () => {
  colorCard2.classList.add("show");
});

card2.addEventListener("mouseleave", () => {
  colorCard2.classList.remove("show");
});

// برای کارت سوم
let card3 = document.querySelector(".product-card3");
let colorCard3 = document.querySelector(".dot-3");

card3.addEventListener("mouseenter", () => {
  colorCard3.classList.add("show");
});

card3.addEventListener("mouseleave", () => {
  colorCard3.classList.remove("show");
});

// برای  کارت چهارم
let card4 = document.querySelector(".product-card4");

card4.addEventListener("mouseenter", () => {
  colorCard1.classList.add("show");
});

card4.addEventListener("mouseleave", () => {
  colorCard1.classList.remove("show");
});

// برای کارت پنجم
let card5 = document.querySelector(".product-card5");

card5.addEventListener("mouseenter", () => {
  colorCard2.classList.add("show");
});

card5.addEventListener("mouseleave", () => {
  colorCard2.classList.remove("show");
});

// برای کارت ششم
let card6 = document.querySelector(".product-card6");

card6.addEventListener("mouseenter", () => {
  colorCard3.classList.add("show");
});

card6.addEventListener("mouseleave", () => {
  colorCard3.classList.remove("show");
});

// برای ساب منو صفحه اصلی
const safheAsliMobile = document.querySelector(".first-sub-menu");
const safheMobileButton = document.querySelector(
  ".submenu-mobile .bg-submenu-mobile .safhe-asli-sub"
);
const beforeIconSafheAsli = document.querySelector(".safhe-asli-arrow-before");
const afterIconSafheAsli = document.querySelector(".safhe-asli-hover-icon");

safheAsliMobile.addEventListener("click", () => {
  beforeIconSafheAsli.classList.toggle("hide");
  afterIconSafheAsli.classList.toggle("show");
  safheMobileButton.classList.toggle("show");
});
// دسته بندی خدمات صفحه اصلی اولیش
const safheAsliKhadamatOne = document.querySelector(".safhe-asli-first");
let safheAsliKhadamatTextOne = document.querySelector(
  ".safhe-asli-daste-bandi-1"
);
const safheAsliArrowone = document.querySelector(".safhe-asli-first-after-1");

safheAsliKhadamatOne.addEventListener("mouseenter", () => {
  safheAsliKhadamatTextOne.classList.add("show");
  safheAsliArrowone.classList.add("show");
});

safheAsliKhadamatOne.addEventListener("mouseleave", () => {
  safheAsliKhadamatTextOne.classList.remove("show");
  safheAsliArrowone.classList.remove("show");
});

// دسته بندی خدمات صفحه اصلی دومیش
const safheAsliKhadamatTwo = document.querySelector(".safhe-asli-second");
const safheAsliKhadamatTextTwo = document.querySelector(
  ".safhe-asli-daste-bandi-2"
);
const safheAsliArrowTwo = document.querySelector(".safhe-asli-first-after-2");

safheAsliKhadamatTwo.addEventListener("mouseenter", () => {
  safheAsliKhadamatTextTwo.classList.add("show");
  safheAsliArrowTwo.classList.add("show");
});

safheAsliKhadamatTwo.addEventListener("mouseleave", () => {
  safheAsliKhadamatTextTwo.classList.remove("show");
  safheAsliArrowTwo.classList.remove("show");
});

// برای ساب منو خدمات در ترکیه
const khadamatTurkieMobile = document.querySelector(".second-sub-menu");
const khadamatTurkieButton = document.querySelector(
  ".submenu-mobile .bg-submenu-mobile .khadamat-turkie-sub"
);
const beforeIcon = document.querySelector(".khadamat-turkie-arrow-before");
const afterIcon = document.querySelector(".khadamat-turkie-hover-icon");

khadamatTurkieMobile.addEventListener("click", () => {
  beforeIcon.classList.toggle("hide");
  afterIcon.classList.toggle("show");
  khadamatTurkieButton.classList.toggle("show");
});

// دسته بندی خدمات خدمات در ترکیه اولی
const turkieKhadamatOne = document.querySelector(".khadamat-turkie-first");
let turkieKhadamatTextOne = document.querySelector(
  ".khadamat-turkie-daste-bandi-1"
);
const turkieArrowone = document.querySelector(".khadamat-turkie-first-after-1");

turkieKhadamatOne.addEventListener("mouseenter", () => {
  turkieKhadamatTextOne.classList.add("show");
  turkieArrowone.classList.add("show");
});

turkieKhadamatOne.addEventListener("mouseleave", () => {
  turkieKhadamatTextOne.classList.remove("show");
  turkieArrowone.classList.remove("show");
});

// دسته بندی خدمات خدمات در ترکیه دومی
const turkieKhadamatTwo = document.querySelector(".khadamat-turkie-second");
let turkieKhadamatTextTwo = document.querySelector(
  ".khadamat-turkie-daste-bandi-2"
);
const turkieArrowTwo = document.querySelector(".khadamat-turkie-first-after-2");

turkieKhadamatTwo.addEventListener("mouseenter", () => {
  turkieKhadamatTextTwo.classList.add("show");
  turkieArrowTwo.classList.add("show");
});

turkieKhadamatTwo.addEventListener("mouseleave", () => {
  turkieKhadamatTextTwo.classList.remove("show");
  turkieArrowTwo.classList.remove("show");
});

// بسته شدن منو موبایل
let exitIcon2 = document.querySelector(".logo-exit");
let humbergerIcon = document.querySelector(".icon-humburger-menu");
let menuMobile = document.querySelector(".submenu-mobile");

exitIcon2.addEventListener("click", () => {
  menuMobile.classList.remove("show");
});

humbergerIcon.addEventListener("click", () => {
  menuMobile.classList.add("show");
});
