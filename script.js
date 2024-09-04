document.addEventListener("DOMContentLoaded", () => {
  Toastify(
      Object.assign(
        {
          text: "테스트 토스트",
        },
        option
      )
    ).showToast();
}
