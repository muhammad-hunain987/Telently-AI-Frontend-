import React from "react";
import { ButtonVariant5, ButtonVariant6 } from "../../components";

const MainMenu = ({radioHandler, btnHandler}) => {
  
  return (
    <div>
      <div>
        <div class="flex flex-col justify-start items-start gap-1">
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-[#312a50] text-center py-8">
            Practice giving live, conversational interviews for free.
          </p>
          <p class="flex-grow-0 flex-shrink-0 text-sm text-center text-[#6b6581]/70">
            You can select a practice interview from popular roles, or just
            create an interview for any job title you wish to practice for.
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="grid grid-cols-2 justify-between gap-x-4 gap-y-8 mt-8 mb-4 pb-4">
          <ButtonVariant5 handler={() => radioHandler("full stack developer")}>Full Stack Developer</ButtonVariant5>
          <ButtonVariant5 handler={() => radioHandler("front end developer")}>Front End Developer</ButtonVariant5>
          <ButtonVariant5 handler={() => radioHandler("business development manager")}>Business Development Manager</ButtonVariant5>
          <ButtonVariant5 handler={() => radioHandler("lead product designer")}>Lead Product Designer</ButtonVariant5>
        </div>
        <ButtonVariant6 handler={btnHandler}>I want to create my custom interview</ButtonVariant6>
      </div>
    </div>
  );
};

export default MainMenu;
