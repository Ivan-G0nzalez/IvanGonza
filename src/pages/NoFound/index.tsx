import empty from "src/assets/images/NoFound/empty.gif";

function NotFoundPage() {
  return (
    <div className="flex justify-center">
      <img src={empty} alt="empty" className="max-w-xs w-full" />
    </div>
  );
}

export default NotFoundPage;
