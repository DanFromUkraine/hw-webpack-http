const module_html_container = `<div class="info-module nunito-sans-font">
<p>Завдання зайняло уйму часу. Я майже 2 повних робочих дня працював над ним, але це через дефіцит досвіду, якраз ту пару я пропустив, тому довелося заплатити штрафом у вигляді часу на засвоєння матеріалу. В мене є питання, щодо того, як можна зробити цей проєкт чуточку краще:</p>
<p>
    Щоб провантажити сторінку треба уйму часу, занадто багато, кілька разів треба робити той самий запит. Як це можна зробити? Моя здогадка, що зображення дуже важкі. В поєднанні з довгим очікуванням на кожне зображення, що можна зробити більш асинхронно, аніж є зараз. Проте, думаю, у вас буде багато чого додати, і це буде більш реалістично, ніж моя версія
</p>
<p>
    І ще: може у вас буде порада щодо архітектури додатку? Мені здається, вона занадто величезна як для такого простого додатку. Думаю, я зробив деякі речі значно складніше, ніж можна було, звідки і результат
</p>
</div>`;

const info_btn_container = document.querySelector(".info_btn");
let module_container;
function show_module(e) {
  if (!document.querySelector(".info-module")) {
    document.body.insertAdjacentHTML("beforebegin", module_html_container);

    module_container = document.querySelector(".info-module");
    module_container.addEventListener("click", hide_module);
  }
}
info_btn_container.addEventListener("click", show_module);

function hide_module(e) {
    module_container.remove()
}
