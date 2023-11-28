import { Table, type TableSource, tableMapperValues } from "@skeletonlabs/skeleton";

const sourceData = [
    {}
]

const tableSimple: TableSource {
    head=["Id", "Name", "State", "Start", "End", "Type", "Items"],
    body=tableMapperValues(sourceData, ["_id", "name", "state", "start", "end", "type", "items"]),
    meta=tableMapperValues(sourceData, ["_id", "name", "state", "start", "end", "type", "items"])
}