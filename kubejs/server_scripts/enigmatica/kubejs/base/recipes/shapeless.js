events.listen('recipes', (event) => {
    var recipes = [
        shapelessRecipe('botania:enchanted_soil', ['minecraft:grass_block', 'botania:overgrowth_seed']),
        shapelessRecipe('minecraft:sticky_piston', ['minecraft:piston', '#forge:slimeballs']),
        shapelessRecipe('minecraft:flint', ['#forge:gravel', '#forge:gravel', '#forge:gravel']),
        shapelessRecipe('simplefarming:cornbread', ['#forge:grain', '#forge:crops/corn', '#forge:grain']),
        shapelessRecipe('minecraft:chest', ['#forge:chests/wooden']),
        // shapelessRecipe('minecraft:crafting_table', [
        //     'craftingstation:crafting_station_slab',
        //     'craftingstation:crafting_station_slab'
        // ]),
        shapelessRecipe('simplefarming:fish_sandwich', [
            '#forge:bread',
            'aquaculture:fish_fillet_cooked',
            'aquaculture:fish_fillet_cooked',
            '#forge:crops/tomato',
            '#forge:salad_ingredients'
        ]),
        shapelessRecipe('simplefarming:sushi', [
            '#forge:grain',
            'minecraft:dried_kelp',
            'aquaculture:fish_fillet_raw',
            'aquaculture:fish_fillet_raw'
        ]),
        shapelessRecipe('simplefarming:fish_fillet', [
            '#forge:grain',
            '#forge:grain',
            'aquaculture:fish_fillet_cooked',
            'aquaculture:fish_fillet_cooked'
        ]),
        // shapelessRecipe('tetra:magmatic_cell', [
        //     { item: 'tetra:magmatic_cell', nbt: { Damage: 128 } },
        //     'powah:capacitor_blazing',
        //     'powah:capacitor_blazing'
        // ]),
        shapelessRecipe(item.of('additionalbars:crossed_iron_bars', 9), [
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars',
            'minecraft:iron_bars'
        ]),
        shapelessRecipe('minecraft:wheat_seeds', ['minecraft:wheat']),
        shapelessRecipe('quark:root', ['minecraft:vine', '#forge:dyes/brown']),
        shapelessRecipe(item.of('patchouli:guide_book', { 'patchouli:book': 'patchouli:modded_for_dummies' }), [
            'minecraft:book',
            '#forge:dyes/yellow'
        ]),
        shapelessRecipe(item.of('emendatusenigmatica:steel_ingot', 2), [
            'immersiveengineering:ingot_steel',
            'immersiveengineering:ingot_steel'
        ]),
        shapelessRecipe(item.of('immersiveengineering:ingot_steel', 2), [
            'mekanism:ingot_steel',
            'mekanism:ingot_steel'
        ]),
        shapelessRecipe(item.of('mekanism:ingot_steel', 2), [
            'emendatusenigmatica:steel_ingot',
            'emendatusenigmatica:steel_ingot'
        ]),
        shapelessRecipe(item.of('bambooeverything:bamboo_bundle', 2), ['thermal:bamboo_block', 'thermal:bamboo_block']),
        shapelessRecipe(item.of('thermal:bamboo_block', 2), ['quark:bamboo_block', 'quark:bamboo_block']),
        shapelessRecipe(item.of('quark:bamboo_block', 2), [
            'bambooeverything:bamboo_bundle',
            'bambooeverything:bamboo_bundle'
        ]),
        // shapelessRecipe('industrialforegoing:essence_bucket', ['pneumaticcraft:memory_essence_bucket']),
        // shapelessRecipe('pneumaticcraft:memory_essence_bucket', ['industrialforegoing:essence_bucket']),
        shapelessRecipe('minecraft:crafting_table', ['#forge:workbench']),
        shapelessRecipe(item.of('patchouli:guide_book', { 'patchouli:book': 'resourcefulbees:fifty_shades_of_bees' }), [
            'minecraft:sugar',
            'minecraft:book'
        ]),
        shapelessRecipe('prettypipes:pipe_frame', [
            'minecraft:item_frame',
            'prettypipes:pipe',
            '#forge:dusts/redstone'
        ]),
        shapelessRecipe('prettypipes:crafting_terminal', [
            'prettypipes:item_terminal',
            'prettypipes:low_crafting_module'
        ]),
        shapelessRecipe('ars_nouveau:mana_gem', ['emendatusenigmatica:arcane_gem']),
        shapelessRecipe('emendatusenigmatica:arcane_gem', ['ars_nouveau:mana_gem'])
    ];

    recipes.forEach(function (recipe) {
        event.shapeless(recipe.result, recipe.ingredients);
    });
});
