
const CustomPagination = (props) => {
    const { currentSlide, slideCount } = props;
  
    const renderPagingItems = () => {
      const pagingItems = [];
  
      for (let i = 0; i < slideCount; i++) {
        const isActive = i === currentSlide;
  
        pagingItems.push(
          <div
            key={i}
            className={`paging-item ${isActive ? 'active' : ''}`}
          >
            <img
              src={`/assets/photos/sliderbtn.png`}
              alt={`Dot ${i}`}
            />
          </div>
        );
      }
  
      return pagingItems;
    };
  
    return (
      <div className="custom-paging">
        {renderPagingItems()}
      </div>
    );
  };
  
  export default CustomPagination;