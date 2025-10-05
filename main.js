let steps = [
  {
    title: "اعتبارسنجی",
    desc: "ابتدا لازم است با انجام اعتبارسنجی بانکی، رتبه اعتباری خود را بررسی کنید. این رتبه به شما نشان می‌دهد که شرایط دریافت وام لندو را دارید و با توجه به آن، مشخص می‌شود که کدام وام‌ها برای شما قابل دریافت هستند.",
    img: "./images/step1-04.png",
    link: "اعتبارسنجی",
  },
  {
    title: "درخواست وام",
    desc: "حالا باید از لندو سفته الکترونیکی تهیه کرده و آن را امضا کنید. پس از تهیه سفته از لندو، آن را در نرم افزار اختصاصی بانک آینده امضا کنید.",
    img: "./images/step2-02.png",
    link: "",
  },
  {
    title: "بارگذاری مدارک",
    desc: "تصاویر شناسنامه یا کارت ملی را بارگذاری کنید.",
    img: "./images/step2-03.png",
    link: "",
  },
  {
    title: "ثبت امضای الکتریکی",
    desc: "اعتبارسنجی اولیه به صورت خودکار انجام می‌شود.",
    img: "./images/step3-02.png",
    link: "",
  },
  {
    title: "صدور صفته الکتریکی",
    desc: "مبلغ و مدت بازپرداخت را انتخاب کنید.",
    img: "./images/step5-02.png",
    link: "",
  },
  {
    title: "ثسنبیشمناب",
    desc: "قرارداد را بررسی و امضا کنید.",
    img: "./images/step6-04.png",
    link: "",
  },
  {
    title: "منسشتیبشمنا",
    desc: "پس از تایید، وجه وام به حساب شما واریز می‌شود.",
    img: "./images/step7-04.png",
    link: "",
  },
];

function showStep(i) {
  document.getElementById("stepTitle").textContent = steps[i].title;
  document.getElementById("stepDesc").textContent = steps[i].desc;
  document.getElementById("stepImg").src = steps[i].img;
  document.getElementById("link").textContent = steps[i].link;

  let btns = document.querySelectorAll("#buttons button");
  btns.forEach(function (btn, idx) {
    btn.classList.toggle("btn-primary", idx === i);
    btn.classList.toggle("btn-outline-primary", idx !== i);
  });
}

let btnContainer = document.getElementById("buttons");
steps.forEach(function (_, i) {
  let btn = document.createElement("button");
  btn.className = "btn btn-outline-primary btn-sm";
  btn.textContent = "مرحله " + (i + 1);
  btn.onclick = function () {
    showStep(i);
  };
  btnContainer.appendChild(btn);
});

showStep(0);

const range = document.getElementById("range");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const val = document.getElementById("val");
const fullPayment = document.getElementById("full-loan-payment");
const monthlyPayment = document.getElementById("monthly-loan-Payment");

function updateValue() {
  val.textContent = Number(range.value).toLocaleString() + "تومان";
  fullPayment.textContent =
    Number(range.value * 1.2).toLocaleString() + "تومان";
  monthlyPayment.textContent =
    Number((1.2 * range.value) / 12).toLocaleString() + "تومان";
}

function updateFullPayment() {
  fullPayment.textContent =
    Number(range.value * 1.2).toLocaleString() + "تومان";
}

function updateMonthlyPayment() {
  monthlyPayment.textContent =
    Number((1.2 * range.value) / 12).toLocaleString() + "تومان";
}

range.addEventListener("input", updateValue);

minusBtn.addEventListener("click", () => {
  let newValue = parseInt(range.value) - 5000000;
  if (newValue >= parseInt(range.min)) {
    range.value = newValue;
    updateValue();
    updateFullPayment();
    updateMonthlyPayment();
  }
});

plusBtn.addEventListener("click", () => {
  let newValue = parseInt(range.value) + 5000000;
  if (newValue <= parseInt(range.max)) {
    range.value = newValue;
    updateValue();
    updateFullPayment();
    updateMonthlyPayment();
  }
});

updateValue();
updateFullPayment();
updateMonthlyPayment();

console.log("hello everyone");
