import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PageBanner from "../Shared/PageBanner/PageBanner";
import useMenu from "../../hooks/useMenu";
import ItemCard from "../../components/ItemCard";
import { useParams } from "react-router-dom";

const Shop = () => {
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(0);
  const [allCategory, setAllCategory] = useState([]);
  const {category} = useParams();
  let initialIndex = allCategory.indexOf(category);
  if(initialIndex === -1) {
    initialIndex = 0;
  }
  useEffect(()=>{
    setTabIndex(initialIndex)
  },[initialIndex])
  useEffect(() => {
    const categories = [];
    for (const item of menu) {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    }
    setAllCategory(categories);
  }, [menu]);
  return (
    <div>
      <PageBanner
        bannerTitle="Our Shop"
        img="https://i.ibb.co/8s3vSX8/banner2.jpg"
      ></PageBanner>
      {/* tabs by category start from here */}
      <div className="max-container my-10 md:my-20">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            {allCategory?.map((category, index) => (
              <Tab key={index}>{category.toUpperCase()}</Tab>
            ))}
          </TabList>
          {allCategory.map((tabPanel, index) => (
            <TabPanel key={index}>
                <div className="grid md:grid-cols-3 gap-y-8 my-8 justify-items-center">
                    {
                        menu.map(item => item.category === tabPanel ? <ItemCard key={item._id} item={item}></ItemCard> : '')
                    }
                </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
