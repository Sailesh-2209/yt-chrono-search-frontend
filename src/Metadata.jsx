/* eslint-disable react/prop-types */

import { MetadataSkeleton } from "./Skeletons"

export default function Metadata(props) {
    const { 
        showResults,
        isMetadataLoading,
        isMetadataAvailable
    } = props;

    if (showResults) {
        if (isMetadataLoading) {
            return <MetadataSkeleton />
        } else {
            if (isMetadataAvailable) {
                return (
                    <div></div>
                )
            } else {
                return <></>
            }
        }
    } else {
        return <></>
    }
}
