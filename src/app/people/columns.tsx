"use client";
import { Button } from "@/components/ui/button";
import { Person } from "@/people";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

export const columns: ColumnDef<Person>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            row.toggleSelected(!!value);
          }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Person ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    accessorKey: "id",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Balance ($)",
    accessorKey: "balance",
  },
  {
    header: "Email",
    accessorKey: "email",
    cell: ({ row }) => {
      const email = row.getValue("email");
      return (
        <div className="font-medium">
          <a href={`mailto:${email}`}>{
            email
          }</a>
        </div>
      );
    },
  },
  {
    header: "Registration",
    accessorKey: "registerAt",
    cell: ({ row }) => {
      const registerAt = row.getValue("registerAt");
      const formatted = new Date(registerAt as string).toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    header: "Status",
    accessorKey: "active",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const person = row.original;
      const personId = person.id;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-8 h-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(person.name.toString());
              }}
            >
              Copy person name
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(person.name.toString());
              }}
            >
              Edit 🛠
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(person.name.toString());
              }}
            >
              Delete 🗑
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];