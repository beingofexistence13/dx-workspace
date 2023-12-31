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
package org.netbeans.modules.java.j2seproject.ui.wizards;

import java.io.File;
import javax.swing.JButton;
import javax.swing.event.DocumentEvent;
import javax.swing.event.DocumentListener;
import org.netbeans.api.annotations.common.NonNull;
import org.openide.util.NbBundle;

/**
 *
 * @author Tomas Zezula
 */
class ImportFoldersPanel extends javax.swing.JPanel {

    private final File projDir;
    private final JButton okOption;
    /**
     * Creates new form ImportFoldersPanel
     */
    public ImportFoldersPanel(
        @NonNull final File projDir,
        @NonNull final File distDir,
        @NonNull final String newName,
        @NonNull final JButton okOption) {
        this.projDir = projDir;
        this.okOption = okOption;
        initComponents();
        message.setText(NbBundle.getMessage(
            ImportFoldersPanel.class,
            "MSG_ImportFolders",
            distDir.getAbsolutePath()));
        distName.getDocument().addDocumentListener(new DocumentListener() {
            @Override
            public void insertUpdate(DocumentEvent de) {
                updateDistFolder();
            }

            @Override
            public void removeUpdate(DocumentEvent de) {
                updateDistFolder();
            }

            @Override
            public void changedUpdate(DocumentEvent de) {
                updateDistFolder();
            }
        });
        distName.setText(newName);
        resize();
    }

    public String getDistFolder() {
        return distName.getText();
    }

    private void updateDistFolder() {
        boolean valid = false;
        final String name = distName.getText().trim();
        if (name.length() > 0) {
            final File dist = new File(projDir,name);
            distFolder.setText(dist.getAbsolutePath());
            valid = ! dist.exists();
        } else {
            distFolder.setText(projDir.getAbsolutePath());
        }
        okOption.setEnabled(valid);
    }

    private void resize() {
        int width = (int)(message.getFontMetrics(message.getFont()).getStringBounds(message.getText(), getGraphics()).getWidth() / 2.7) + 40;
        int height = (message.getFont().getSize() * 5) + 100;
        if (width < 400)
            width = 400;
        if (height < 160)
            height = 160;
        java.awt.Dimension dim = new java.awt.Dimension(width, height);
        setMinimumSize(dim);
        setPreferredSize(dim);
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {
        java.awt.GridBagConstraints gridBagConstraints;

        message = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        distName = new javax.swing.JTextField();
        jLabel3 = new javax.swing.JLabel();
        distFolder = new javax.swing.JTextField();
        jPanel1 = new javax.swing.JPanel();

        setLayout(new java.awt.GridBagLayout());

        message.setText(org.openide.util.NbBundle.getMessage(ImportFoldersPanel.class, "ImportFoldersPanel.message.text")); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 0;
        gridBagConstraints.gridy = 0;
        gridBagConstraints.gridwidth = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.fill = java.awt.GridBagConstraints.HORIZONTAL;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.WEST;
        gridBagConstraints.weightx = 1.0;
        gridBagConstraints.insets = new java.awt.Insets(12, 12, 0, 12);
        add(message, gridBagConstraints);

        jLabel2.setLabelFor(distName);
        org.openide.awt.Mnemonics.setLocalizedText(jLabel2, org.openide.util.NbBundle.getMessage(ImportFoldersPanel.class, "TXT_BuildArtifactName")); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 0;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.WEST;
        gridBagConstraints.insets = new java.awt.Insets(12, 12, 0, 6);
        add(jLabel2, gridBagConstraints);

        distName.setText(org.openide.util.NbBundle.getMessage(ImportFoldersPanel.class, "ImportFoldersPanel.distName.text")); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.gridwidth = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.fill = java.awt.GridBagConstraints.HORIZONTAL;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.WEST;
        gridBagConstraints.weightx = 1.0;
        gridBagConstraints.insets = new java.awt.Insets(12, 0, 0, 12);
        add(distName, gridBagConstraints);
        distName.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(ImportFoldersPanel.class, "AD_BuildArtifactName")); // NOI18N

        jLabel3.setLabelFor(distFolder);
        org.openide.awt.Mnemonics.setLocalizedText(jLabel3, org.openide.util.NbBundle.getMessage(ImportFoldersPanel.class, "TXT_BuildArtifactFile")); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 0;
        gridBagConstraints.gridy = 2;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.WEST;
        gridBagConstraints.insets = new java.awt.Insets(6, 12, 12, 6);
        add(jLabel3, gridBagConstraints);

        distFolder.setEditable(false);
        distFolder.setText(org.openide.util.NbBundle.getMessage(ImportFoldersPanel.class, "ImportFoldersPanel.distFolder.text")); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 2;
        gridBagConstraints.gridwidth = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.fill = java.awt.GridBagConstraints.HORIZONTAL;
        gridBagConstraints.anchor = java.awt.GridBagConstraints.WEST;
        gridBagConstraints.weightx = 1.0;
        gridBagConstraints.insets = new java.awt.Insets(6, 0, 12, 12);
        add(distFolder, gridBagConstraints);
        distFolder.getAccessibleContext().setAccessibleDescription(org.openide.util.NbBundle.getMessage(ImportFoldersPanel.class, "AD_BuildArtifactFile")); // NOI18N

        jPanel1.setLayout(new java.awt.GridLayout());
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridwidth = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.gridheight = java.awt.GridBagConstraints.REMAINDER;
        gridBagConstraints.fill = java.awt.GridBagConstraints.BOTH;
        gridBagConstraints.weightx = 1.0;
        gridBagConstraints.weighty = 1.0;
        add(jPanel1, gridBagConstraints);
    }// </editor-fold>//GEN-END:initComponents
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTextField distFolder;
    private javax.swing.JTextField distName;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JLabel message;
    // End of variables declaration//GEN-END:variables
}
