const Pagination = (props) => {
  const CreatePages = (total_pages, current_page, pages) => {
    if (total_pages > 10) {
      if (current_page > 5) {
        for (let i = current_page - 4; i <= current_page + 5; i++) {
          pages.push(i);
          if (i === total_pages) {
          }
          break;
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          pages.push(i);
          if (i === total_pages) break;
        }
      }
    } else {
      for (let i = 1; i <= total_pages; i++) {
        pages.push(i);
      }
    }
    return pages;
  };
  let pages = CreatePages(props.total_pages, props.current_page, []);
  console.log(pages);
  return (
    <div>
      {pages.map((page) => (
        <button>{page}</button>
      ))}
    </div>
  );
};

export default Pagination;
