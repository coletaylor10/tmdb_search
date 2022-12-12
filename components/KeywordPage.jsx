import React from 'react'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const KeywordPage = () => {
    const router = useRouter();
    const [keyword, setKeyword] = useState();

    useEffect(()=>{
        setKeyword(router.query.keyword);
    },);
   
  return (
    <div> 
        {keyword}
    </div>
  )
}

export default KeywordPage;