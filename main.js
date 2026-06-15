document.addEventListener('DOMContentLoaded', () => {
    const TG_LINK = 'https://t.me/+kHgaci7AzhtlOWEy';

    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
            window.location.href = TG_LINK;
        }
    });
});
