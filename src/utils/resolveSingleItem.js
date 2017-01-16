
export default function resolveSingleItem(id, load, info, noLoadRequiredFor) {
    const rootSelectionSet = info.fieldASTs[0].selectionSet;
    const hasRequiredField = !!rootSelectionSet.selections
        .find(el => noLoadRequiredFor.indexOf(el.name.value) === -1);

    if (hasRequiredField) {
        return load();
    }

    return {
        token: id,
    };
}
