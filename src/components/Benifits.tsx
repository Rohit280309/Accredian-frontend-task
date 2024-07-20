import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronRight } from "lucide-react";
import ReferButton from "./ReferButton";

const data = [
  {
    Program: "Professional Certificate Program in Product Management",
    Referrer_Bonus: "₹ 7,000",
    Referee_Bonus: "₹ 9,000",
  },
  {
    Program: "PG Certificate Program in Strategic Product Management",
    Referrer_Bonus: "₹ 9,000",
    Referee_Bonus: "₹ 11,000",
  },
  {
    Program: "Executive Program in Data Driven Product Management",
    Referrer_Bonus: "₹ 10,000",
    Referee_Bonus: "₹ 10,000",
  },
  {
    Program: "Executive Program in Product Management and Digital Transformation",
    Referrer_Bonus: "₹ 10,000",
    Referee_Bonus: "₹ 10,000",
  },
  {
    Program: "Executive Program in Product Management",
    Referrer_Bonus: "₹ 10,000",
    Referee_Bonus: "₹ 10,000",
  },
  {
    Program: "Advanced Certification in Product Management",
    Referrer_Bonus: "₹ 10,000",
    Referee_Bonus: "₹ 10,000",
  },
  {
    Program: "Executive Program in Product Management and Project Management",
    Referrer_Bonus: "₹ 10,000",
    Referee_Bonus: "₹ 10,000",
  },
];

type Data = {
  Program: string,
  Referrer_Bonus: string,
  Referee_Bonus: string
}

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[]
// }

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "Program",
    header: () => <div className="text-blue-700 font-bold">Programs</div>,
  },
  {
    accessorKey: "Referrer_Bonus",
    header: () => <div className="text-blue-700 font-bold">Referrer Bonus</div>,
  },
  {
    accessorKey: "Referee_Bonus",
    header: () => <div className="text-blue-700 font-bold">Referee Bonus</div>,
  },
]

const Benifits = () => {

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="font-bold text-lg">What Are The <span className="text-blue-600">Referral Benefits?</span></h1>
      <div className="flex space-x-5 p-5">
        <div className="rounded-lg border w-56">
          <div className="flex items-center justify-between p-2 border-b rounded-lg rounded-br-none rounded-bl-none bg-blue-600 text-white overflow-hidden">
            <p>All Programs</p>
            <ChevronRight size={20} />
          </div>
          <div className="flex items-center justify-between p-2 border-b overflow-hidden">
            <p className="p-1">Product Management</p>
            <ChevronRight size={20} />
          </div>
          <div className="flex items-center justify-between border-b p-2 overflow-hidden">
            <p className="p-1">Strategy & Leadership</p>
            <ChevronRight size={20} />
          </div>
          <div className="flex items-center justify-between border-b p-2 overflow-hidden">
            <p className="p-1">Business Management</p>
            <ChevronRight size={20} />
          </div>
          <div className="flex items-center justify-between border-b p-2 overflow-hidden">
            <p className="p-2">Senior Management</p>
            <ChevronRight size={20} />
          </div>
          <div className="flex items-center justify-between border-b p-2 overflow-hidden">
            <p className="p-2">Data Science</p>
            <ChevronRight size={20} />
          </div>
          <div className="flex items-center justify-between border-b p-2 overflow-hidden">
            <p className="p-2">Digital Transformation</p>
            <ChevronRight size={20} />
          </div>
          <div className="flex items-center justify-between p-2 rounded-lg rounded-tr-none rounded-tl-none overflow-hidden">
            <p className="p-2">Business Analytics</p>
            <ChevronRight size={20} />
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader className="bg-blue-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="bg-blue-50">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="p-2">
        <ReferButton />
      </div>

    </div>
  )
}

export default Benifits