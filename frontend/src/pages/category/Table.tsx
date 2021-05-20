import MUIDataTable, { MUIDataTableColumn } from 'mui-datatables';
import React , {useState, useEffect}from 'react';
import format from "date-fns/format";
import parseISO from 'date-fns/parseISO';
import categoryhttp from '../../util/http/category-http';
import { BadgeYes, BadgeNo } from '../../components/Badge';

const columsDefinition: MUIDataTableColumn[] = [
    {
        name: "name",
        label: "Nome"
    },
    {
        name: "is_active",
        label: "Ativo?",
        options:{
            customBodyRender(value, tableMeta, updateValue){
                return value ? <BadgeYes/> : <BadgeNo/>
            }
        }
    },
    {
        name: "created_at",
        label: "Criado em",
        options:{
            customBodyRender(value, tableMeta, updateValue){
            return <span>{format(parseISO(value), 'dd/MM/yyyy')}</span>
            }
        }
    }

];
// const data = [
//     { name: "Teste1", is_active: true, created_at: "2020-09-10"},
//     { name: "Teste2", is_active: false, created_at: "2020-09-10"},
//     { name: "Teste3", is_active: true, created_at: "2020-09-10"},
//     { name: "Teste4", is_active: false, created_at: "2020-09-10"},
// ]
interface Category {
    id: string;
    name: string;
}
type Props = {

};
const Table = (props: Props) => {

    const [data, setData ] = useState<Category[]>([]);
    
    useEffect(()=>{
        categoryhttp
        .list<{data: Category[]}>()
        .then(({data}) => setData(data.data));
        // httpVideo.get('categories').then(
        //     response =>  setData(response.data.data)
        // )
    }, []);

    return (
        <div>
            <MUIDataTable 
                title="Listagem de categorias"
                columns={columsDefinition}
                data={data}
            />
        </div>
    );
}

export default Table;