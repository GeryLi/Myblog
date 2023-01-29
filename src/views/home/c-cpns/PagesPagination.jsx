import React, { memo } from 'react'
import { Pagination } from 'antd';
import styled from 'styled-components';

const PagesPagination = memo(() => {
  return (
    <PaginationWapple >
      <div className="content">
      <Pagination defaultCurrent={1} total={50} />

      </div>
    </PaginationWapple>
  )
})
const PaginationWapple = styled.div`
.content {
  margin:0 auto;
  width:500px;
}

`

export default PagesPagination