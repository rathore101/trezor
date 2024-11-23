import { useRouter } from "next/router";

function pageNo() {
  const router = useRouter();
  const pageNumber = router.query.pageNo;
  return (
    <div>
      <h2>Sorry! Please Go To Home {pageNumber}.............!</h2>
    </div>
  );
}

export default pageNo;
