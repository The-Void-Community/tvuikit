import { Button } from "../button";
import { Wrapper } from "../wrapper";
import { useNotifications } from "./use-notifications.hook";

export const Notifications = () => {
  const { NotificationComponent, notificate, closeAll } = useNotifications({
    duration: 3000,
    delay: 1000,
  });

  return (
    <Wrapper className="page">
      {NotificationComponent}
      <Button
        onClick={() => {
          notificate(({ count, queue, current }) => {
            return `Привет! Данный: ${current.id}, всего: ${count}, осталось: ${queue.length}`;
          });
        }}
      >
        Уведомить
      </Button>
      <Button onClick={closeAll}>Закрыть все</Button>
    </Wrapper>
  );
};
