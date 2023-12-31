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

package org.netbeans.modules.options.editor.completion;

import java.util.HashMap;
import java.util.Map;
import java.util.prefs.Preferences;
import javax.swing.JPanel;
import org.netbeans.api.editor.settings.SimpleValueNames;
import org.netbeans.api.options.OptionsDisplayer;
import org.netbeans.spi.options.OptionsPanelController;

/**
 *
 * @author Dusan Balek
 */
@OptionsPanelController.Keywords(keywords = {"#KW_CodeCompletion"}, location = OptionsDisplayer.EDITOR, tabTitle="#CTL_CodeCompletion_DisplayName")
public class GeneralCompletionOptionsPanel extends JPanel {

    private Preferences preferences;
    private final Map<String, Boolean> id2Saved = new HashMap<String, Boolean>();
    
    /** 
     * Creates new form GeneralCompletionOptionsPanel.
     */
    public GeneralCompletionOptionsPanel (Preferences p) {
        initComponents ();
        preferences = p;
        cbInsertClosingBracketsAutomatically.setSelected(preferences.getBoolean("pair-characters-completion", true)); //NOI18N
        cbAutoPopup.setSelected(preferences.getBoolean(SimpleValueNames.COMPLETION_AUTO_POPUP, true));
        cbDocsAutoPopup.setSelected(preferences.getBoolean(SimpleValueNames.JAVADOC_AUTO_POPUP, true));
        cbJavadocNextToCC.setSelected(preferences.getBoolean(SimpleValueNames.JAVADOC_POPUP_NEXT_TO_CC, false));
        cbDisplayParameterTooltip.setSelected(preferences.getBoolean(SimpleValueNames.COMPLETION_PARAMETER_TOOLTIP, true));
        cbShowDeprecated.setSelected(preferences.getBoolean(SimpleValueNames.SHOW_DEPRECATED_MEMBERS, true));
        cbInsertSingleProposalsAutomatically.setSelected(preferences.getBoolean(SimpleValueNames.COMPLETION_INSTANT_SUBSTITUTION, true));
        cbCaseSensitive.setSelected(preferences.getBoolean(SimpleValueNames.COMPLETION_CASE_SENSITIVE, true));
        id2Saved.put("pair-characters-completion", cbInsertClosingBracketsAutomatically.isSelected()); //NOI18N
        id2Saved.put(SimpleValueNames.COMPLETION_AUTO_POPUP, cbAutoPopup.isSelected());
        id2Saved.put(SimpleValueNames.JAVADOC_AUTO_POPUP, cbDocsAutoPopup.isSelected());
        id2Saved.put(SimpleValueNames.JAVADOC_POPUP_NEXT_TO_CC, cbJavadocNextToCC.isSelected());
        id2Saved.put(SimpleValueNames.COMPLETION_PARAMETER_TOOLTIP, cbDisplayParameterTooltip.isSelected());
        id2Saved.put(SimpleValueNames.SHOW_DEPRECATED_MEMBERS, cbShowDeprecated.isSelected());
        id2Saved.put(SimpleValueNames.COMPLETION_INSTANT_SUBSTITUTION, cbInsertSingleProposalsAutomatically.isSelected());
        id2Saved.put(SimpleValueNames.COMPLETION_CASE_SENSITIVE, cbCaseSensitive.isSelected());
    }

    String getSavedValue(String key) {
        return Boolean.toString(id2Saved.get(key));
    }
    
    /** This method is called from within the constructor to
     * initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the Form Editor.
     */
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        cbAutoPopup = new javax.swing.JCheckBox();
        cbDocsAutoPopup = new javax.swing.JCheckBox();
        cbJavadocNextToCC = new javax.swing.JCheckBox();
        cbInsertSingleProposalsAutomatically = new javax.swing.JCheckBox();
        cbCaseSensitive = new javax.swing.JCheckBox();
        cbShowDeprecated = new javax.swing.JCheckBox();
        cbInsertClosingBracketsAutomatically = new javax.swing.JCheckBox();
        cbDisplayParameterTooltip = new javax.swing.JCheckBox();

        setForeground(new java.awt.Color(99, 130, 191));

        org.openide.awt.Mnemonics.setLocalizedText(cbAutoPopup, org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "CTL_Auto_Popup_Completion_Window")); // NOI18N
        cbAutoPopup.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cbAutoPopupActionPerformed(evt);
            }
        });

        org.openide.awt.Mnemonics.setLocalizedText(cbDocsAutoPopup, org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "CTL_Auto_Popup_Documentation_Window")); // NOI18N
        cbDocsAutoPopup.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cbDocsAutoPopupActionPerformed(evt);
            }
        });

        org.openide.awt.Mnemonics.setLocalizedText(cbJavadocNextToCC, org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "CTL_Javadoc_Next_To_CC")); // NOI18N
        cbJavadocNextToCC.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cbJavadocNextToCCActionPerformed(evt);
            }
        });

        org.openide.awt.Mnemonics.setLocalizedText(cbInsertSingleProposalsAutomatically, org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "CTL_Insert_Single_Proposals_Automatically")); // NOI18N
        cbInsertSingleProposalsAutomatically.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cbInsertSingleProposalsAutomaticallyActionPerformed(evt);
            }
        });

        org.openide.awt.Mnemonics.setLocalizedText(cbCaseSensitive, org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "CTL_Case_Sensitive_Code_Completion")); // NOI18N
        cbCaseSensitive.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cbCaseSensitiveActionPerformed(evt);
            }
        });

        org.openide.awt.Mnemonics.setLocalizedText(cbShowDeprecated, org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "CTL_Show_Deprecated_Members")); // NOI18N
        cbShowDeprecated.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cbShowDeprecatedActionPerformed(evt);
            }
        });

        org.openide.awt.Mnemonics.setLocalizedText(cbInsertClosingBracketsAutomatically, org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "CTL_Pair_Character_Completion")); // NOI18N
        cbInsertClosingBracketsAutomatically.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cbInsertClosingBracketsAutomaticallyActionPerformed(evt);
            }
        });

        org.openide.awt.Mnemonics.setLocalizedText(cbDisplayParameterTooltip, org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "GeneralCompletionOptionsPanel.cbDisplayParameterTooltip.text")); // NOI18N
        cbDisplayParameterTooltip.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                cbDisplayParamterTooltipActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(cbInsertClosingBracketsAutomatically)
                    .addComponent(cbShowDeprecated)
                    .addComponent(cbCaseSensitive)
                    .addComponent(cbDocsAutoPopup)
                    .addComponent(cbAutoPopup)
                    .addComponent(cbInsertSingleProposalsAutomatically)
                    .addComponent(cbJavadocNextToCC)
                    .addComponent(cbDisplayParameterTooltip))
                .addContainerGap(46, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(6, 6, 6)
                .addComponent(cbAutoPopup)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(cbDocsAutoPopup)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(cbJavadocNextToCC)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(cbDisplayParameterTooltip)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(cbInsertSingleProposalsAutomatically)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(cbCaseSensitive)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(cbShowDeprecated)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(cbInsertClosingBracketsAutomatically)
                .addContainerGap(13, Short.MAX_VALUE))
        );

        cbAutoPopup.getAccessibleContext().setAccessibleName(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AN_Auto_Popup_Completion_Window")); // NOI18N
        cbAutoPopup.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AD_Auto_Popup_Completion_Window")); // NOI18N
        cbDocsAutoPopup.getAccessibleContext().setAccessibleName(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AN_Auto_Popup_Documentation_Window")); // NOI18N
        cbDocsAutoPopup.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AD_Auto_Popup_Documentation_Window")); // NOI18N
        cbJavadocNextToCC.getAccessibleContext().setAccessibleName(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AN_Javadoc_Next_To_CC")); // NOI18N
        cbJavadocNextToCC.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AD_Javadoc_Next_To_CC")); // NOI18N
        cbInsertSingleProposalsAutomatically.getAccessibleContext().setAccessibleName(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AN_Insert_Single_Proposals_Automatically")); // NOI18N
        cbInsertSingleProposalsAutomatically.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AD_Insert_Single_Proposals_Automatically")); // NOI18N
        cbCaseSensitive.getAccessibleContext().setAccessibleName(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AN_Case_Sensitive_Code_Completion")); // NOI18N
        cbCaseSensitive.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AD_Case_Sensitive_Code_Completion")); // NOI18N
        cbShowDeprecated.getAccessibleContext().setAccessibleName(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AN_Show_Deprecated_Members")); // NOI18N
        cbShowDeprecated.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AD_Show_Deprecated_Members")); // NOI18N
        cbInsertClosingBracketsAutomatically.getAccessibleContext().setAccessibleName(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AN_Pair_Character_Completion")); // NOI18N
        cbInsertClosingBracketsAutomatically.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "AD_Pair_Character_Completion")); // NOI18N

        getAccessibleContext().setAccessibleName(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "GeneralCompletionOptionsPanel.AccessibleContext.accessibleName")); // NOI18N
        getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(GeneralCompletionOptionsPanel.class, "GeneralCompletionOptionsPanel.AccessibleContext.accessibleDescription")); // NOI18N
    }// </editor-fold>//GEN-END:initComponents

    private void cbAutoPopupActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cbAutoPopupActionPerformed
        preferences.putBoolean(SimpleValueNames.COMPLETION_AUTO_POPUP, cbAutoPopup.isSelected());
    }//GEN-LAST:event_cbAutoPopupActionPerformed

    private void cbDocsAutoPopupActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cbDocsAutoPopupActionPerformed
        preferences.putBoolean(SimpleValueNames.JAVADOC_AUTO_POPUP, cbDocsAutoPopup.isSelected());
    }//GEN-LAST:event_cbDocsAutoPopupActionPerformed

    private void cbInsertSingleProposalsAutomaticallyActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cbInsertSingleProposalsAutomaticallyActionPerformed
        preferences.putBoolean(SimpleValueNames.COMPLETION_INSTANT_SUBSTITUTION, cbInsertSingleProposalsAutomatically.isSelected());
    }//GEN-LAST:event_cbInsertSingleProposalsAutomaticallyActionPerformed

    private void cbCaseSensitiveActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cbCaseSensitiveActionPerformed
        preferences.putBoolean(SimpleValueNames.COMPLETION_CASE_SENSITIVE, cbCaseSensitive.isSelected());
    }//GEN-LAST:event_cbCaseSensitiveActionPerformed

    private void cbShowDeprecatedActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cbShowDeprecatedActionPerformed
        preferences.putBoolean(SimpleValueNames.SHOW_DEPRECATED_MEMBERS, cbShowDeprecated.isSelected());
    }//GEN-LAST:event_cbShowDeprecatedActionPerformed

    private void cbInsertClosingBracketsAutomaticallyActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cbInsertClosingBracketsAutomaticallyActionPerformed
        preferences.putBoolean("pair-characters-completion", cbInsertClosingBracketsAutomatically.isSelected()); //NOI18N
    }//GEN-LAST:event_cbInsertClosingBracketsAutomaticallyActionPerformed

    private void cbJavadocNextToCCActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cbJavadocNextToCCActionPerformed
        preferences.putBoolean(SimpleValueNames.JAVADOC_POPUP_NEXT_TO_CC, cbJavadocNextToCC.isSelected());
    }//GEN-LAST:event_cbJavadocNextToCCActionPerformed

    private void cbDisplayParamterTooltipActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_cbDisplayParamterTooltipActionPerformed
        preferences.putBoolean(SimpleValueNames.COMPLETION_PARAMETER_TOOLTIP, cbDisplayParameterTooltip.isSelected());
    }//GEN-LAST:event_cbDisplayParamterTooltipActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JCheckBox cbAutoPopup;
    private javax.swing.JCheckBox cbCaseSensitive;
    private javax.swing.JCheckBox cbDisplayParameterTooltip;
    private javax.swing.JCheckBox cbDocsAutoPopup;
    private javax.swing.JCheckBox cbInsertClosingBracketsAutomatically;
    private javax.swing.JCheckBox cbInsertSingleProposalsAutomatically;
    private javax.swing.JCheckBox cbJavadocNextToCC;
    private javax.swing.JCheckBox cbShowDeprecated;
    // End of variables declaration//GEN-END:variables
}
