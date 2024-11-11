import React from 'react'

import Link from 'next/link'


const getCategories = async() => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);

    if(res.ok){
      const categories = await res.json();
      return categories
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

const CategoriesList = async() => {
  const categories = await getCategories();
    return (
      <>
        <div className="flex gap-2 text-sm flex-wrap">
        {categories &&
          categories.map((category) => (
            <Link
              key={category.id} // Add a unique key here
              className="px-4 py-1 rounded-md bg-slate-800 text-white cursor-pointer"
              href={`/categories/${category.catName}`} // Corrected template literal syntax
            >
              {category.catName}
            </Link>
          ))}
      </div>
      </>
    )
}

export default CategoriesList