# Fix for the NameError: name 'X' is not defined

# Add this code before the get_feature_contributions call:

# Prepare the feature matrix X and target variable y
X = train_data.drop('LABEL', axis=1)
y = train_data['LABEL']

print("X shape:", X.shape)
print("y shape:", y.shape)
print("Feature columns available:", len(X.columns))