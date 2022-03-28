import React, { useState } from "react";
import { StyledTabs, ButtonTab, Content } from "./styles";

function Tabs({ tabs = [], maxContentHeight }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <StyledTabs>
        {tabs &&
          tabs.length &&
          tabs.map((item, index) => {
            if (index === activeTab) {
              return (
                <ButtonTab active key={item.title}>
                  {item.title}
                </ButtonTab>
              );
            }
            return (
              <ButtonTab key={item.title} onClick={() => setActiveTab(index)}>
                {item.title}
              </ButtonTab>
            );
          })}
      </StyledTabs>
      <Content $maxContentHeight={maxContentHeight}>
        {tabs[activeTab].content}
      </Content>
    </div>
  );
}

export default Tabs;
