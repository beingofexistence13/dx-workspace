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
package org.netbeans.modules.janitor;

import javax.swing.SpinnerNumberModel;
import org.openide.util.NbBundle.Messages;

/**
 *
 * @author lkishalmi
 */
public class JanitorOptionsPanel extends javax.swing.JPanel {

    final SpinnerNumberModel spinnerModel;
    /**
     * Creates new form JanitorOptionsPanel
     */
    public JanitorOptionsPanel() {
        initComponents();
        spinnerModel = new SpinnerNumberModel(Janitor.getUnusedDays(), 0, 5*365, 1);
        spUnusedDays.setModel(spinnerModel);
    }

    void loadValues() {
        cbEnabled.setSelected(Janitor.isEnabled());
        cbAutoRemove.setSelected(Janitor.isAutoRemoveAbandonedCache());
        spinnerModel.setValue(Janitor.getUnusedDays());
        resetRunNow();
    }

    void saveValues() {
        Janitor.setEnabled(cbEnabled.isSelected());
        Janitor.setAutoRemoveAbandonedCache(cbAutoRemove.isSelected());
        Janitor.setUnusedDays(spinnerModel.getNumber().intValue());
        resetRunNow();
    }

    boolean isChanged() {
        boolean changed = false;
        changed |= cbEnabled.isSelected() != Janitor.isEnabled();
        changed |= cbAutoRemove.isSelected() != Janitor.isAutoRemoveAbandonedCache();
        changed |= spinnerModel.getNumber().intValue() != Janitor.getUnusedDays();
        changed |= !btRunNow.isEnabled();
        return changed;
    }
    
    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        cbEnabled = new javax.swing.JCheckBox();
        lbUnusedDays = new javax.swing.JLabel();
        cbAutoRemove = new javax.swing.JCheckBox();
        spUnusedDays = new javax.swing.JSpinner();
        btRunNow = new javax.swing.JButton();
        lbRunNowInfo = new javax.swing.JLabel();

        org.openide.awt.Mnemonics.setLocalizedText(cbEnabled, org.openide.util.NbBundle.getMessage(JanitorOptionsPanel.class, "JanitorOptionsPanel.cbEnabled.text")); // NOI18N

        lbUnusedDays.setLabelFor(spUnusedDays);
        org.openide.awt.Mnemonics.setLocalizedText(lbUnusedDays, org.openide.util.NbBundle.getMessage(JanitorOptionsPanel.class, "JanitorOptionsPanel.lbUnusedDays.text")); // NOI18N

        org.openide.awt.Mnemonics.setLocalizedText(cbAutoRemove, org.openide.util.NbBundle.getMessage(JanitorOptionsPanel.class, "JanitorOptionsPanel.cbAutoRemove.text")); // NOI18N

        org.openide.awt.Mnemonics.setLocalizedText(btRunNow, org.openide.util.NbBundle.getMessage(JanitorOptionsPanel.class, "JanitorOptionsPanel.btRunNow.text")); // NOI18N
        btRunNow.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btRunNowActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(btRunNow)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(lbRunNowInfo, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addComponent(cbEnabled, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(lbUnusedDays)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(spUnusedDays, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addComponent(cbAutoRemove))
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(cbEnabled)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(cbAutoRemove)
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(lbUnusedDays)
                    .addComponent(spUnusedDays, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(32, 32, 32)
                        .addComponent(lbRunNowInfo))
                    .addGroup(layout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(btRunNow)))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
    }// </editor-fold>//GEN-END:initComponents

    @Messages("lbRunNowInfo_Info=Janitor run. Check your Notifications.")
    private void btRunNowActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btRunNowActionPerformed
        btRunNow.setEnabled(false);
        Janitor.runNow();
        lbRunNowInfo.setText(Bundle.lbRunNowInfo_Info());
    }//GEN-LAST:event_btRunNowActionPerformed

    private void resetRunNow() {
        btRunNow.setEnabled(true);
        lbRunNowInfo.setText(null);
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btRunNow;
    private javax.swing.JCheckBox cbAutoRemove;
    private javax.swing.JCheckBox cbEnabled;
    private javax.swing.JLabel lbRunNowInfo;
    private javax.swing.JLabel lbUnusedDays;
    private javax.swing.JSpinner spUnusedDays;
    // End of variables declaration//GEN-END:variables
}
