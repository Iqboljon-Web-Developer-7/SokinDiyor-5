// Any click anywhere on the page goes to Telegram
// (real <a> links, like the sticky CTA, navigate on their own).
document.addEventListener('click', function (e) {
  if (!e.target.closest('a')) {
    window.location.href = 'https://t.me/+kHgaci7AzhtlOWEy';
  }
});
