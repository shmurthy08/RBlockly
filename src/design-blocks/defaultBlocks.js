var xmlString = `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="variable_creation_type" id="elem1" x="70" y="50">
    <field name="VAR">my_list</field>
    <value name="VAR_VALUE">
      <block type="list_type" id="elem2">
        <statement name="LIST_VALUES">
          <block type="list_element_type" id="elem3">
            <value name="LIST_ELEMENT_VALUE">
              <block type="numeric_type" id="elem4">
                <field name="NUM_VALUE">-7</field>
              </block>
            </value>
            <next>
              <block type="list_element_type" id="elem5">
                <value name="LIST_ELEMENT_VALUE">
                  <block type="random_list_type" id="elem6">
                    <field name="NUM_VALUES">3</field>
                    <field name="BOUNDARY_1">0</field>
                    <field name="BOUNDARY_2">9</field>
                    <field name="WITH_REPLACEMENT">TRUE</field>
                  </block>
                </value>
                <next>
                  <block type="list_element_type" id="elem7">
                    <value name="LIST_ELEMENT_VALUE">
                      <block type="random_list_type" id="elem8">
                        <field name="NUM_VALUES">4</field>
                        <field name="BOUNDARY_1">25</field>
                        <field name="BOUNDARY_2">50</field>
                        <field name="WITH_REPLACEMENT">FALSE</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </value>
    <next>
      <block type="print_type" id="elem9">
        <value name="OUTPUT_VALUE">
          <block type="variable_usage_type" id="elem10">
            <field name="OLD_VAR">my_list</field>
          </block>
        </value>
        <next>
          <block type="print_type" id="elem11">
            <value name="OUTPUT_VALUE">
              <block type="string_type" id="elem12">
                <field name="STR_VALUE">Average Value</field>
              </block>
            </value>
            <next>
              <block type="print_type" id="elem13">
                <value name="OUTPUT_VALUE">
                  <block type="aggregate_type" id="elem14">
                    <field name="AGGREGATE_TYPE">MEAN</field>
                    <value name="AGG_VALUE">
                      <block type="variable_usage_type" id="elem15">
                        <field name="OLD_VAR">my_list</field>
                      </block>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="plot_type" id="elem16">
                    <field name="PLOT_TYPE">DENSITY</field>
                    <value name="PLOT_LIST">
                      <block type="variable_usage_type" id="elem17">
                        <field name="OLD_VAR">my_list</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>
`;
var parser = new DOMParser();
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var serializer = new XMLSerializer();
window.defaultBlocks = serializer.serializeToString(xmlDoc);