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

package org.netbeans.modules.javaee.project.api.ant.ui.wizard;

import java.io.File;
import java.text.MessageFormat;

import javax.swing.JButton;
import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;

import org.openide.util.NbBundle;

final class ImportBuildfile extends javax.swing.JPanel implements DocumentListener {

    private JButton ok;
    private File buildFileDir;

    /** Creates new form ImportBuildfile */
    public ImportBuildfile(File buildFile, JButton okButton) {
        initComponents();
        this.getAccessibleContext().setAccessibleDescription(NbBundle.getMessage(ImportBuildfile.class, "ACS_IW_BuildFileDialog_A11YDesc"));  // NOI18N
        
        ok = okButton;
        buildFileDir = buildFile.getParentFile();
        ok.setEnabled(false);
        
        String msg = MessageFormat.format(NbBundle.getMessage(ImportBuildfile.class,
                "LBL_IW_BuildfileDesc_Label"), buildFile.getAbsolutePath()); //NOI18N
        jLabelDesc.setText(msg);
        jTextFieldBuildName.getDocument().addDocumentListener(this);
        jTextFieldBuildName.setText(NbBundle.getMessage(ImportBuildfile.class, "LBL_IW_ProposedName_TextField")); //NOI18N
        
        resize();
    }
    
    private void resize() {
        int width = (int)(jLabelDesc.getFontMetrics(jLabelDesc.getFont()).getStringBounds(jLabelDesc.getText(), getGraphics()).getWidth() / 2.7) + 40;
        int height = (jLabelDesc.getFont().getSize() * 5) + 100;
        if (width < 400)
            width = 400;
        if (height < 160)
            height = 160;
        java.awt.Dimension dim = new java.awt.Dimension(width, height);
        setMinimumSize(dim);
        setPreferredSize(dim);
    }
    
    /** This method is called from within the constructor to
     * initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is
     * always regenerated by the Form Editor.
     */
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {
        java.awt.GridBagConstraints gridBagConstraints;

        jLabelDesc = new javax.swing.JLabel();
        jLabelBuildName = new javax.swing.JLabel();
        jTextFieldBuildName = new javax.swing.JTextField();
        jLabelCreatedFile = new javax.swing.JLabel();
        jTextFieldCreatedFile = new javax.swing.JTextField();

        setLayout(new java.awt.GridBagLayout());
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridwidth = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.fill = java.awt.GridBagConstraints.HORIZONTAL;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.WEST;
        gridBagConstraints.insets = new java.awt.Insets(12, 12, 11, 11);
        add(jLabelDesc, gridBagConstraints);

        jLabelBuildName.setDisplayedMnemonic(org.openide.util.NbBundle.getMessage(ImportBuildfile.class, "LBL_IW_BuildFilename_LabelMnemonic").charAt(0));
        jLabelBuildName.setLabelFor(jTextFieldBuildName);
        jLabelBuildName.setText(NbBundle.getMessage(ImportBuildfile.class, "LBL_IW_BuildFilename_Label")); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 0;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.WEST;
        gridBagConstraints.insets = new java.awt.Insets(0, 12, 11, 11);
        add(jLabelBuildName, gridBagConstraints);
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.gridwidth = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.fill = java.awt.GridBagConstraints.HORIZONTAL;
        gridBagConstraints.weightx = 1.0;
        gridBagConstraints.insets = new java.awt.Insets(0, 0, 11, 11);
        add(jTextFieldBuildName, gridBagConstraints);
        jTextFieldBuildName.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(ImportBuildfile.class, "ACS_LBL_IW_BuildFilename_A11YDesc")); // NOI18N

        jLabelCreatedFile.setDisplayedMnemonic(org.openide.util.NbBundle.getMessage(ImportBuildfile.class, "LBL_IW_CreatedFile_LabelMnemonic").charAt(0));
        jLabelCreatedFile.setLabelFor(jTextFieldCreatedFile);
        jLabelCreatedFile.setText(NbBundle.getMessage(ImportBuildfile.class, "LBL_IW_CreatedFile_Label")); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 0;
        gridBagConstraints.gridy = 2;
        gridBagConstraints.gridheight = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.NORTHWEST;
        gridBagConstraints.weighty = 1.0;
        gridBagConstraints.insets = new java.awt.Insets(0, 12, 11, 11);
        add(jLabelCreatedFile, gridBagConstraints);

        jTextFieldCreatedFile.setEditable(false);
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 2;
        gridBagConstraints.gridwidth = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.gridheight = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.fill = java.awt.GridBagConstraints.HORIZONTAL;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.NORTH;
        gridBagConstraints.weighty = 1.0;
        gridBagConstraints.insets = new java.awt.Insets(0, 0, 11, 11);
        add(jTextFieldCreatedFile, gridBagConstraints);
        jTextFieldCreatedFile.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(ImportBuildfile.class, "ACS_LBL_IW_CreatedFile_A11YDesc")); // NOI18N
    }// </editor-fold>//GEN-END:initComponents
    
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabelBuildName;
    private javax.swing.JLabel jLabelCreatedFile;
    private javax.swing.JLabel jLabelDesc;
    private javax.swing.JTextField jTextFieldBuildName;
    private javax.swing.JTextField jTextFieldCreatedFile;
    // End of variables declaration//GEN-END:variables

    protected String getBuildName() {
        return jTextFieldBuildName.getText().trim();
    }
    
    // Implementation of DocumentListener --------------------------------------
    public void changedUpdate(DocumentEvent e) {
        updateButton();
    }
    
    public void insertUpdate(DocumentEvent e) {
        updateButton();
    }
    
    public void removeUpdate(DocumentEvent e) {
        updateButton();
    }
    // End if implementation of DocumentListener -------------------------------

    private void updateButton() {
        String buildFileName = getBuildName();
        File buildFile = new File(buildFileDir, buildFileName);
        jTextFieldCreatedFile.setText(buildFile.getAbsolutePath());
        ok.setEnabled(!(buildFileName.length() == 0 || buildFile.exists()));
    }
}