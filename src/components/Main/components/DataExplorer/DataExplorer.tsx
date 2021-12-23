import s from './DataExplorer.module.scss';
import {useGetTest, useUpdateTest} from "../../../../queries/test";

export const DataExplorer = () => {
    const { data } = useGetTest('test')
    const { mutate } = useUpdateTest()
    return <div className={s.DataExplorer} />
}
