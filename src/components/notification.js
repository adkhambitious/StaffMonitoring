export const createNotificationListTemplate = (content) => 
`<div class="notification-list">${content}</div>`;

export const createNotificationItemTemplate = (violation) => 
`<article class="notification-list__notification notification">
  <header class="notification__header">
    <img class="notification__img" src="/img/warning.min.svg" arial-role="presentation">
    <p class="notification__text">Внимание!</p>
    <button class="notification__button-close" type="button" title="Закрыть">&#10006;</button>
  </header>
  <div class="notification__message">
    ${violation.name} зашёл в зону ${violation.zone}
  </div>
</article>`;
