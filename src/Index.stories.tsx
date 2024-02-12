import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./index";
import { Button } from "@wds-ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  title: "Marbella/Collapsible",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-screen h-screen flex justify-center items-center gap-4">
      <Collapsible className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            @stitches/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
