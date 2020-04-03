import React, { useEffect, useCallback }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ContainerType } from '../../modules/layout/index'; 
import { Grids } from '../../modules/grids/index';
import * as actions from '../../store/actions/index';

export default props => {
    
    const dispatch = useDispatch();
    const data = useSelector(state => state.main.data);
    
    const stableDispatch = useCallback(() => {
        console.log(props.match.url);
        dispatch(actions.fetchMainData(props.match.url.substring(1,3)));
    }, [props.match.url, dispatch]);

    useEffect(() => { 
        stableDispatch(); 
    }, [stableDispatch]);

    
    if( Object.keys(data).length === 0 ){
        return <div></div>
    }else{
        return (
            <ContainerType.Image header={data.header}>
                <Grids.Wrapper type='intro'>
                    <Grids.Container>
                        <Grids.Header title={data.africapolis.title} type='nine' all />
                        <Grids.Grid data={data.africapolis.list} type={['i_lg','i_sm','i_sm']}/> 
                        <Grids.Latest type='latest' data={data.latest} />
                    </Grids.Container>
                </Grids.Wrapper>
                <Grids.Wrapper type='intro'>
                    <Grids.Container>
                        <Grids.Header title={data.research.title} type='twelve' all />
                        <Grids.Grid data={data.research.list} type={['md','md','md']} />
                    </Grids.Container>
                    <Grids.Container>
                        <Grids.Header title={data.explore.title} type='twelve' all />
                        <Grids.Grid data={data.explore.list} type={['md','md','md']} />
                    </Grids.Container>
                </Grids.Wrapper>
                <Grids.Wrapper>
                    <Grids.Container>
                            <Grids.Header title={data.media.title} type='twelve' />
                            <Grids.Grid data={data.media.list} type={['xs','xs','xs','xs','xs','xs']} />
                    </Grids.Container>
                </Grids.Wrapper>
            </ContainerType.Image> 
        )
    }
}


