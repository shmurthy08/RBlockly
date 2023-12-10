var xmlString = `
<xml xmlns="https://developers.google.com/blockly/xml">
    <block type="list_type" id="listBlock" x="50" y="50">
        <value name="LIST_VALUES">
            <block type="list_element_type" id="element1">
                <value name="LIST_ELEMENT_VALUE">
                    <block type="numeric_type">
                        <field name="NUM_VALUE">1</field>
                    </block>
                </value>
                <next>
                    <block type="list_element_type" id="element2">
                        <value name="LIST_ELEMENT_VALUE">
                            <block type="numeric_type">
                                <field name="NUM_VALUE">2</field>
                            </block>
                        </value>
                        <next>
                            <block type="list_element_type" id="element3">
                                <value name="LIST_ELEMENT_VALUE">
                                    <block type="numeric_type">
                                        <field name="NUM_VALUE">3</field>
                                    </block>
                                </value>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </value>
    </block>
</xml>
`;
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);