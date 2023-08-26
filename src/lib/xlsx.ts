import xlsx, { IJsonSheet } from "json-as-xlsx";
import { people } from "@/people";

export function downloadToExcel() {
  let columns: IJsonSheet[] = [
    {
      sheet: "Persons",
      columns: [
        { label: "Person ID", value: "id" },
        { label: "Name", value: "name" },
        { label: "Balance ($)", value: "balance" },
        { label: "Email", value: "email" },
        {
          label: "Registration",
          value: (row) => new Date(
            row.registerAt as string
          ).toLocaleDateString(),
        },
        { label: "Status", value: "active" },
      ],
      content: people,
    },
  ];

  let settings = {
    fileName: "People Excel",
  };

  xlsx(columns, settings);
}