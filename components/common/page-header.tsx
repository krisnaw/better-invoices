import * as React from "react";
import {cn} from "@/lib/utils";

function HeaderTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-title"
      className={cn("text-base font-semibold text-gray-900", className)}
      {...props}
    />
  )
}

function HeaderDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-description"
      className={cn("mt-2 max-w-4xl text-sm text-gray-500", className)}
      {...props}
    />
  )
}

function HeaderGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-group"
      className={cn(
        "min-w-0 flex-1",
        className
      )}
      {...props}
    />
  )
}


function HeaderAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-description"
      className={className}
      {...props}
    />
  )
}

type Props = {
  title: string;
  children?: React.ReactNode;
}

function PageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header"
      className={cn(
        "border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  )
}

export {PageHeader, HeaderDescription, HeaderAction, HeaderTitle, HeaderGroup}
