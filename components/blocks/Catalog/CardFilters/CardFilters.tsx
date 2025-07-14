"use client"
import { useState, useRef } from "react";
import ButtonInput from "@/components/ui/Inputs/ButtonInput/ButtonInput";
import { INftsFilters } from "@/app/type/nfts/INftFilters";
import { useAppDispatch } from "@/store/hooks";
import { getNfts } from "@/store/reducers/business/nftsReducer";
import { debounce } from "@/utils/debounce";

const CardFilters = () => {
    const [filters, setFilters] = useState<INftsFilters>({});
    const dispatch = useAppDispatch();

    // Создаём debounced функцию только один раз
    const debouncedApplyFilters = useRef(
        debounce((filters: INftsFilters) => {
            dispatch(getNfts({ filters }));
        }, 2000)
    ).current;

    const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newFilters = {...filters};
        if(filters[e.target.name] && e.target.value === '') {
            newFilters[e.target.name] = e.target.value;  
            delete filters[e.target.name];
            console.log(filters);
            setFilters({...filters});
        } else {
            newFilters[e.target.name] = e.target.value;  
        }

        setFilters(newFilters);
        debouncedApplyFilters(newFilters); // Передаём новые фильтры
    };
    


    return (
        <div className={'catalog__filters'}>
            <ButtonInput onChange={(e) => onFilterChange(e)} name="category" className={'button-input-outline'} placeholder="Category" />
            <ButtonInput onChange={(e) => onFilterChange(e)} name="collection"  className={'button-input-outline'} placeholder="Collection"></ButtonInput>
            <ButtonInput onChange={(e) => onFilterChange(e)} name="price"   className={'button-input-outline'} placeholder="Price"></ButtonInput>
        </div>
    )
}

export default CardFilters;