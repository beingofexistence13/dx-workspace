/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
package org.netbeans.modules.php.editor.indent.ui;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.GroupLayout;
import javax.swing.JCheckBox;
import javax.swing.JPanel;
import javax.swing.LayoutStyle;
import org.netbeans.modules.options.editor.spi.PreferencesCustomizer;
import org.netbeans.modules.php.editor.indent.FmtOptions;
import org.netbeans.modules.php.editor.indent.FmtOptions.CategorySupport;
import static org.netbeans.modules.php.editor.indent.FmtOptions.CategorySupport.OPTION_ID;
import org.openide.awt.Mnemonics;
import org.openide.util.NbBundle;

/**
 *
 * @author Ondrej Brejla <obrejla@netbeans.org>
 */
public class FmtUses extends JPanel {

    private static final Logger LOGGER = Logger.getLogger(FmtUses.class.getName());
    private static final long serialVersionUID = -3146487319808745793L;

    public FmtUses() {
        initComponents();
        preferFullyQualifiedNamesCheckBox.putClientProperty(OPTION_ID, FmtOptions.PREFER_FULLY_QUALIFIED_NAMES);
        preferMultipleUseStatementsCombinedCheckBox.putClientProperty(OPTION_ID, FmtOptions.PREFER_MULTIPLE_USE_STATEMENTS_COMBINED);
        preferGroupUsesCheckBox.putClientProperty(OPTION_ID, FmtOptions.PREFER_GROUP_USES);
        startUseWithNamespaceSeparatorCheckBox.putClientProperty(OPTION_ID, FmtOptions.START_USE_WITH_NAMESPACE_SEPARATOR);
        aliasesCapitalsOfNamespacesCheckBox.putClientProperty(OPTION_ID, FmtOptions.ALIASES_CAPITALS_OF_NAMESPACES);
        putInPSR12OrderCheckBox.putClientProperty(OPTION_ID, FmtOptions.PUT_IN_PSR12_ORDER);
        keepExistingUseTypeOrderCheckBox.putClientProperty(OPTION_ID, FmtOptions.USES_KEEP_EXISTING_TYPE_ORDER);
    }

    public static PreferencesCustomizer.Factory getController() {
        String preview = ""; // NOI18N
        try {
            preview = Utils.loadPreviewText(FmtUses.class.getClassLoader().getResourceAsStream("org/netbeans/modules/php/editor/indent/ui/Uses.php")); // NOI18N
        } catch (IOException ex) {
            LOGGER.log(Level.WARNING, null, ex);
        }
        return new CategorySupport.Factory("uses", FmtUses.class, preview); // NOI18N
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        preferFullyQualifiedNamesCheckBox = new JCheckBox();
        preferMultipleUseStatementsCombinedCheckBox = new JCheckBox();
        preferGroupUsesCheckBox = new JCheckBox();
        startUseWithNamespaceSeparatorCheckBox = new JCheckBox();
        aliasesCapitalsOfNamespacesCheckBox = new JCheckBox();
        putInPSR12OrderCheckBox = new JCheckBox();
        keepExistingUseTypeOrderCheckBox = new JCheckBox();

        setName(NbBundle.getMessage(FmtUses.class, "LBL_Uses")); // NOI18N
        setOpaque(false);

        preferFullyQualifiedNamesCheckBox.setMnemonic('F');
        Mnemonics.setLocalizedText(preferFullyQualifiedNamesCheckBox, NbBundle.getMessage(FmtUses.class, "FmtUses.preferFullyQualifiedNamesCheckBox.text")); // NOI18N

        preferMultipleUseStatementsCombinedCheckBox.setMnemonic('M');
        Mnemonics.setLocalizedText(preferMultipleUseStatementsCombinedCheckBox, NbBundle.getMessage(FmtUses.class, "FmtUses.preferMultipleUseStatementsCombinedCheckBox.text")); // NOI18N

        Mnemonics.setLocalizedText(preferGroupUsesCheckBox, NbBundle.getMessage(FmtUses.class, "FmtUses.preferGroupUsesCheckBox.text")); // NOI18N

        startUseWithNamespaceSeparatorCheckBox.setMnemonic('S');
        Mnemonics.setLocalizedText(startUseWithNamespaceSeparatorCheckBox, NbBundle.getMessage(FmtUses.class, "FmtUses.startUseWithNamespaceSeparatorCheckBox.text")); // NOI18N

        aliasesCapitalsOfNamespacesCheckBox.setMnemonic('g');
        Mnemonics.setLocalizedText(aliasesCapitalsOfNamespacesCheckBox, NbBundle.getMessage(FmtUses.class, "FmtUses.aliasesCapitalsOfNamespacesCheckBox.text")); // NOI18N

        Mnemonics.setLocalizedText(putInPSR12OrderCheckBox, NbBundle.getMessage(FmtUses.class, "FmtUses.putInPSR12OrderCheckBox.text")); // NOI18N

        Mnemonics.setLocalizedText(keepExistingUseTypeOrderCheckBox, NbBundle.getMessage(FmtUses.class, "FmtUses.keepExistingUseTypeOrderCheckBox.text")); // NOI18N

        GroupLayout layout = new GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(layout.createParallelGroup(GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(GroupLayout.Alignment.LEADING)
                    .addComponent(preferFullyQualifiedNamesCheckBox)
                    .addComponent(preferMultipleUseStatementsCombinedCheckBox)
                    .addComponent(startUseWithNamespaceSeparatorCheckBox)
                    .addComponent(aliasesCapitalsOfNamespacesCheckBox)
                    .addComponent(preferGroupUsesCheckBox)
                    .addComponent(putInPSR12OrderCheckBox)
                    .addComponent(keepExistingUseTypeOrderCheckBox))
                .addContainerGap(GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(layout.createParallelGroup(GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(preferFullyQualifiedNamesCheckBox)
                .addPreferredGap(LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(preferMultipleUseStatementsCombinedCheckBox)
                .addPreferredGap(LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(preferGroupUsesCheckBox)
                .addPreferredGap(LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(startUseWithNamespaceSeparatorCheckBox)
                .addPreferredGap(LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(aliasesCapitalsOfNamespacesCheckBox)
                .addPreferredGap(LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(putInPSR12OrderCheckBox)
                .addPreferredGap(LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(keepExistingUseTypeOrderCheckBox)
                .addContainerGap(GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
    }// </editor-fold>//GEN-END:initComponents
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private JCheckBox aliasesCapitalsOfNamespacesCheckBox;
    private JCheckBox keepExistingUseTypeOrderCheckBox;
    private JCheckBox preferFullyQualifiedNamesCheckBox;
    private JCheckBox preferGroupUsesCheckBox;
    private JCheckBox preferMultipleUseStatementsCombinedCheckBox;
    private JCheckBox putInPSR12OrderCheckBox;
    private JCheckBox startUseWithNamespaceSeparatorCheckBox;
    // End of variables declaration//GEN-END:variables
}