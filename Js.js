document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // 阻止表單實際送出

        const id = document.getElementById("inputID").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!id || !password) {
            alert("請填寫身分證字號和密碼！");
            return;
        }

        // 模擬成功訊息
        alert("登入驗證完成！（此為示意）");
    });

    const refreshCaptcha = document.getElementById("refreshCaptcha");
    refreshCaptcha.addEventListener("click", () => {
        alert("驗證碼已重新載入！（此為示意）");
    });
});